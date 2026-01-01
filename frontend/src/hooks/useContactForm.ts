import { useState, type FormEvent } from 'react';
import { contactFormSchema, type ContactFormData } from '../lib/validations';

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string>>;
  status: { type: 'success' | 'error' | null; message: string };
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent, onSuccess?: () => void) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export function useContactForm(
  onSubmit: (data: ContactFormData) => Promise<void>
): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: FormEvent, onSuccess?: () => void) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    setErrors({});

    // Validate with Zod
    const result = contactFormSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const fieldName = err.path[0];
        if (fieldName && typeof fieldName === 'string') {
          fieldErrors[fieldName as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(result.data);
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      resetForm();
      onSuccess?.();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  };
}
