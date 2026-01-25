import { SignalFormInterface } from './form.interface';

export const initWashList = [
  { id: 1, washType: 'Tunnel Wash', icon: 'local_car_wash' },
  { id: 2, washType: 'Self Wash', icon: 'build_circle' },
  { id: 3, washType: 'Chemical Wash', icon: 'science' },
  { id: 4, washType: 'Hand Wash', icon: 'pan_tool' },
];

export const initSignalForm: SignalFormInterface = {
  name: '',
  phone: '',
  vehicle: '',
  date: '',
  description: '',
};
