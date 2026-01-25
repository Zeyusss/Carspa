export interface BookingInterface {
  id?: string;
  name: string;
  phone: string;
  washType: WashType | undefined;
  vehicle: string;
  date: string;
  description: string;
  img?: string | null;
}

interface WashType {
  id: number;
  washType: string;
  icon: string;
}
