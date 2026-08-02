import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const contactApi = {
  sendMessage: (payload: { name: string; email: string; message: string }) => api.post('/contact', payload),
};

export const authApi = {
  register: (payload: { name: string; email: string; password: string }) => api.post('/auth/register', payload),
  login: (payload: { email: string; password: string }) => api.post('/auth/login', payload),
};

export const kingdomApi = {
  getAll: () => api.get('/kingdoms'),
};

export const characterApi = {
  create: (payload: Record<string, unknown>) => api.post('/characters', payload),
};

export const quizApi = {
  submit: (payload: Record<string, unknown>) => api.post('/quiz', payload),
};

export const achievementApi = {
  save: (payload: Record<string, unknown>) => api.post('/achievements', payload),
  getAll: () => api.get('/achievements'),
};

export default api;
