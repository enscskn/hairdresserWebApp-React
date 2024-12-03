import { User, Appointment, Service } from '../types';

export const fakeUsers: User[] = [
  {
    id: '1',
    name: 'İbrahim Yalman',
    email: 'ibrahim@example.com',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    email: 'ayse@example.com',
    role: 'user',
  },
];

export const fakeServices: Service[] = [
  { id: '1', name: 'Saç Kesimi', duration: 30, price: 150, description: 'Profesyonel saç kesimi' },
  { id: '2', name: 'Saç Boyama', duration: 120, price: 400, description: 'Saç boyama ve bakım' },
  { id: '3', name: 'Fön', duration: 30, price: 100, description: 'Fön çekimi' },
  { id: '4', name: 'Saç Bakımı', duration: 60, price: 250, description: 'Derin saç bakımı' },
];

export const fakeAppointments: Appointment[] = [
  {
    id: '1',
    userId: '2',
    date: '2024-03-20',
    time: '10:00',
    service: '1',
    status: 'confirmed',
  },
  {
    id: '2',
    userId: '2',
    date: '2024-03-22',
    time: '14:30',
    service: '2',
    status: 'pending',
  },
];