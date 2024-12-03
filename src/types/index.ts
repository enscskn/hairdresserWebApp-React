export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Appointment {
  id: string;
  userId: string;
  date: string;
  time: string;
  service: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}