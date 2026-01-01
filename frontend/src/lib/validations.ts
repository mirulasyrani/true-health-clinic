import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 digits')
    .regex(/^[\d\s\-+()]+$/, 'Please enter a valid phone number'),
  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

// Appointment form validation schema
export const appointmentFormSchema = z.object({
  patientName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 digits')
    .regex(/^[\d\s\-+()]+$/, 'Please enter a valid phone number'),
  appointmentDate: z.string()
    .min(1, 'Please select a date'),
  appointmentTime: z.string()
    .min(1, 'Please select a time'),
  reasonForVisit: z.string()
    .min(5, 'Reason must be at least 5 characters')
    .max(500, 'Reason must be less than 500 characters')
});

// Type inference from schemas
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;
