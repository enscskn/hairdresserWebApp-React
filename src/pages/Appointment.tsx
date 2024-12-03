import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const appointmentSchema = z.object({
  service: z.string().min(1, 'Lütfen bir hizmet seçin'),
  date: z.string().min(1, 'Lütfen bir tarih seçin'),
  time: z.string().min(1, 'Lütfen bir saat seçin'),
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

const services = [
  { id: '1', name: 'Saç Kesimi', duration: 30, price: 150 },
  { id: '2', name: 'Saç Boyama', duration: 120, price: 400 },
  { id: '3', name: 'Fön', duration: 30, price: 100 },
  { id: '4', name: 'Saç Bakımı', duration: 60, price: 250 },
];

const timeSlots = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
];

export function Appointment() {
  const navigate = useNavigate();
  const { addAppointment, isTimeSlotAvailable } = useStore();
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
  });

  const selectedDate = watch('date');

  const onSubmit = (data: AppointmentForm) => {
    if (!isTimeSlotAvailable(data.date, data.time)) {
      alert('Bu randevu saati dolu. Lütfen başka bir saat seçin.');
      return;
    }

    addAppointment({
      id: Math.random().toString(),
      userId: '1',
      date: data.date,
      time: data.time,
      service: data.service,
      status: 'pending',
    });

    alert('Randevunuz başarıyla oluşturuldu!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Randevu Al</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Hizmet</label>
            <select
              {...register('service')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">Hizmet Seçin</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} - {service.price}₺
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tarih</label>
            <input
              type="date"
              {...register('date')}
              min={new Date().toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Saat</label>
            <select
              {...register('time')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">Saat Seçin</option>
              {timeSlots.map((time) => (
                <option
                  key={time}
                  value={time}
                  disabled={selectedDate && !isTimeSlotAvailable(selectedDate, time)}
                >
                  {time}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input
              type="text"
              {...register('name')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefon</label>
            <input
              type="tel"
              {...register('phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Randevu Oluştur
          </button>
        </form>
      </div>
    </div>
  );
}