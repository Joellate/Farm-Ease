import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

export const login = (payload) => api.post('/auth/login', payload);
export const register = (payload) => api.post('/auth/register', payload);
export const fetchCrops = () => api.get('/crops');
export const fetchCrop = (id) => api.get(`/crops/${id}`);
export const createCrop = (payload) => api.post('/crops', payload);
export const updateCrop = (id, payload) => api.put(`/crops/${id}`, payload);
export const deleteCrop = (id) => api.delete(`/crops/${id}`);

export default api;

