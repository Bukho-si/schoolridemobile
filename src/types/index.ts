export type Role = 'Admin' | 'School' | 'Driver' | 'Parent' | null;

export interface SchoolClass {
  id: string;
  grade: string;
  name: string;
  teacher: string;
  room: string;
  learnerCount: number;
}

export interface Payment {
  id: string;
  parentName: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export interface FuelLog {
  id: string;
  litres: string;
  cost: string;
  date: string;
}

export interface Child {
  id: string;
  name: string;
  school: string;
  grade: string;
  className: string; // avoiding reserved word
  address: string;
  pickupTime: string;
}
