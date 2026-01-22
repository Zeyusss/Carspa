interface BookingInterface {
  id: number;
  name: string;
  phone: string;
  washType: WashType;
  vehicle: string;
  date: string;
  description: string;
}

interface WashType {
  id: number;
  washType: string;
  icon: string;
}
