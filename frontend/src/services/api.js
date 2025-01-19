import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const getProducts = () => api.get('/products/');
export const getOrders = () => api.get('/orders/');
export const createOrder = (orderData) => api.post('/orders/', orderData);
export const payWithStripe = (orderId) => api.post(`/orders/${orderId}/pay_with_stripe/`);
export const payWithPaypal = (orderId) => api.post(`/orders/${orderId}/pay_with_paypal/`);
