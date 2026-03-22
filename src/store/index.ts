import { create } from 'zustand';
import { Role, SchoolClass, Payment, FuelLog, Child } from '../types';

interface AppState {
  user: any;
  role: Role;
  children: Child[];
  drivers: any[];
  routes: any[];
  fuelLogs: FuelLog[];
  payments: Payment[];
  classes: SchoolClass[];
  setRole: (role: Role) => void;
  addClass: (cls: SchoolClass) => void;
  updateClass: (cls: SchoolClass) => void;
  deleteClass: (id: string) => void;
  addFuelLog: (log: FuelLog) => void;
  updatePaymentStatus: (id: string, status: Payment['status']) => void;
  addChild: (child: Child) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  role: null,
  children: [],
  drivers: [],
  routes: [],
  fuelLogs: [],
  payments: [
    { id: '1', parentName: 'John Doe', amount: 50, status: 'pending' },
    { id: '2', parentName: 'Jane Smith', amount: 50, status: 'paid' },
  ],
  classes: [
    { id: '1', grade: '8', name: '8A', teacher: 'Mr. Smith', room: '101', learnerCount: 25 },
    { id: '2', grade: '9', name: '9B', teacher: 'Mrs. Jones', room: '202', learnerCount: 30 },
  ],
  setRole: (role) => set({ role }),
  addClass: (cls) => set((state) => ({ classes: [...state.classes, cls] })),
  updateClass: (cls) => set((state) => ({ classes: state.classes.map(c => c.id === cls.id ? cls : c) })),
  deleteClass: (id) => set((state) => ({ classes: state.classes.filter(c => c.id !== id) })),
  addFuelLog: (log) => set((state) => ({ fuelLogs: [...state.fuelLogs, log] })),
  updatePaymentStatus: (id, status) => set((state) => ({
    payments: state.payments.map(p => p.id === id ? { ...p, status } : p)
  })),
  addChild: (child) => set((state) => ({ children: [...state.children, child] })),
}));
