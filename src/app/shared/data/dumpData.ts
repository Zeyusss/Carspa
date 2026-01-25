import { v4 as uuidv4 } from 'uuid';

export const dataSimulation = [
  {
    id: 1,
    name: 'Michael',
    phone: '01068915612',
    img: '/cars/SUV.webp',
    washType: {
      id: 1,
      washType: 'Tunnel Wash',
      icon: 'local_car_wash',
    },
    vehicle: 'SUV',
    date: '2026-07-18T22:00:00.000Z',
    description:
      'Spacious SUV, please focus on cleaning the tires and side doors, with a full glass rinse.',
  },
  {
    id: 2,
    name: 'Zeyad',
    phone: '01068912314',
    img: '/cars/formula-1.webp',
    washType: {
      id: 1,
      washType: 'Self Wash',
      icon: 'local_car_wash',
    },
    vehicle: 'Formula 1',
    date: '2026-07-10T22:00:00.000Z',
    description:
      'High-performance sports car, handle the exterior carefully to avoid scratches, keep the glass sparkling.',
  },
  {
    id: 3,
    name: 'Ahmed',
    phone: '01068911234',
    img: '/cars/limo.webp',
    washType: {
      id: 1,
      washType: 'Hand Wash',
      icon: 'local_car_wash',
    },
    vehicle: 'Limousine',
    date: '2026-08-06T22:00:00.000Z',
    description:
      'Luxury limousine, please clean the interior carefully, polish the exterior, and remove dust from the windows.',
  },
];

export const carspaData = dataSimulation.map((item) => ({
  ...item,
  id: uuidv4(),
}));
