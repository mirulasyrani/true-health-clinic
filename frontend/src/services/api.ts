import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { type ContactFormData, type AppointmentFormData } from '../lib/validations';

// API response wrapper
interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Custom error class
export class ApiError extends Error {
  statusCode?: number;
  originalError?: unknown;
  
  constructor(message: string, statusCode?: number, originalError?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.originalError = originalError;
  }
}

// Create axios instance with default config
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  client.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const message = error.response?.data 
        ? String(error.response.data) 
        : error.message || 'An unexpected error occurred';
      
      throw new ApiError(message, error.response?.status, error);
    }
  );

  return client;
};

const apiClient = createApiClient();

// Generic API request handler
async function apiRequest<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await apiClient.request(config);
    return { data: response.data, success: true };
  } catch (error) {
    if (error instanceof ApiError) {
      return { error: error.message, success: false };
    }
    return { error: 'An unexpected error occurred', success: false };
  }
}

// Contact API
export const contactApi = {
  sendMessage: async (data: ContactFormData): Promise<ApiResponse<void>> => {
    return apiRequest({ method: 'POST', url: '/contact', data });
  },
};

// Appointment API
export const appointmentApi = {
  create: async (data: AppointmentFormData): Promise<ApiResponse<void>> => {
    return apiRequest({ method: 'POST', url: '/appointments', data });
  },
};

// Backwards compatibility
export const contactService = {
  sendMessage: async (data: ContactFormData) => {
    const result = await contactApi.sendMessage(data);
    if (!result.success) throw new Error(result.error);
    return result.data;
  },
};

export const appointmentService = {
  createAppointment: async (data: AppointmentFormData) => {
    const result = await appointmentApi.create(data);
    if (!result.success) throw new Error(result.error);
    return result.data;
  },
};

// Types
export interface ContactMessage extends ContactFormData {}
export interface Appointment extends AppointmentFormData {}

export default apiClient;
