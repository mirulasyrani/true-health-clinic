import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Appointment {
  id?: number;
  name: string;
  email: string;
  phone: string;
  appointmentDate: string;
  service: string;
  notes?: string;
  status?: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read?: boolean;
  createdAt?: string;
}

export const appointmentService = {
  createAppointment: (appointment: Appointment) =>
    api.post<Appointment>('/appointments', appointment),
  
  getAllAppointments: () =>
    api.get<Appointment[]>('/appointments'),
  
  getAppointmentById: (id: number) =>
    api.get<Appointment>(`/appointments/${id}`),
  
  updateAppointment: (id: number, appointment: Appointment) =>
    api.put<Appointment>(`/appointments/${id}`, appointment),
  
  deleteAppointment: (id: number) =>
    api.delete(`/appointments/${id}`),
};

export const contactService = {
  sendMessage: (message: ContactMessage) =>
    api.post<ContactMessage>('/contact', message),
  
  getAllMessages: () =>
    api.get<ContactMessage[]>('/contact'),
  
  getMessageById: (id: number) =>
    api.get<ContactMessage>(`/contact/${id}`),
  
  markAsRead: (id: number) =>
    api.patch<ContactMessage>(`/contact/${id}/read`),
  
  deleteMessage: (id: number) =>
    api.delete(`/contact/${id}`),
};

export default api;
