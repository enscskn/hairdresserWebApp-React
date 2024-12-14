import { create } from 'zustand';
import { User, Appointment } from '../types';
import { fakeUsers, fakeAppointments } from '../data/fakeData';

interface Store {
  user: User | null;
  appointments: Appointment[];
  setUser: (user: User | null) => void;
  addAppointment: (appointment: Appointment) => void;
  isTimeSlotAvailable: (date: string, time: string) => boolean;
  login: (email: string, password: string) => boolean;
}

export const useStore = create<Store>((set, get) => ({
  user: null,
  appointments: fakeAppointments,
  setUser: (user) => set({ user }),
  addAppointment: (appointment) => 
    set((state) => ({ appointments: [...state.appointments, appointment] })),
  isTimeSlotAvailable: (date, time) => {
    const { appointments } = get();
    return !appointments.some(
      (apt) => apt.date === date && apt.time === time
    );
  },
  login: (email, password) => {
    const user = fakeUsers.find(u => u.email === email);
    if (user && password === '123456') {
      set({ user });
      return true;
    }
    return false;
  },
}));