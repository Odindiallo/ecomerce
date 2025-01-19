from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.conf import settings
import stripe
import paypalrestsdk
from .models import Product, Order, OrderItem, Review
from .serializers import ProductSerializer, OrderSerializer, OrderItemSerializer, ReviewSerializer

stripe.api_key = settings.STRIPE_SECRET_KEY

# Create your views here.

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @action(detail=True, methods=['post'])
    def review(self, request, pk=None):
        product = self.get_object()
        user = request.user
        
        # Check if user has already reviewed this product
        if Review.objects.filter(product=product, user=user).exists():
            return Response(
                {'error': 'You have already reviewed this product'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(product=product, user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    @action(detail=True, methods=['post'])
    def pay_with_stripe(self, request, pk=None):
        order = self.get_object()
        
        try:
            # Create Stripe payment intent
            intent = stripe.PaymentIntent.create(
                amount=int(order.total_amount * 100),  # Convert to cents
                currency='usd',
                metadata={'order_id': order.id}
            )
            
            return Response({
                'client_secret': intent.client_secret
            })
        except Exception as e:
            return Response({
                'error': str(e)
            }, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def pay_with_paypal(self, request, pk=None):
        order = self.get_object()
        
        paypalrestsdk.configure({
            "mode": "sandbox",  # Change to "live" in production
            "client_id": settings.PAYPAL_CLIENT_ID,
            "client_secret": settings.PAYPAL_CLIENT_SECRET
        })

        payment = paypalrestsdk.Payment({
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "total": str(order.total_amount),
                    "currency": "USD"
                },
                "description": f"Order #{order.id}"
            }]
        })

        if payment.create():
            # Payment created successfully
            return Response({
                'payment_id': payment.id
            })
        else:
            return Response({
                'error': payment.error
            }, status=status.HTTP_400_BAD_REQUEST)
