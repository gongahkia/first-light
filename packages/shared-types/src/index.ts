// User identity for backend/frontend
export interface User {
  id: number;
  name: string;
  email: string;
  photo?: string;
  timezone: string;
}

// Group data shape for challenge logic
export interface Group {
  id: number;
  name: string;
  donationAmt: number;
  duration: number;
  adminId: number;
}

// Daily check-in shape, including verification details
export interface CheckIn {
  id: number;
  userId: number;
  groupId: number;
  timestamp: string; // ISO
  photo?: string;
  location?: string;
  method: 'photo' | 'location' | 'biometric' | 'manual';
}

// Charity selection shape
export interface Charity {
  id: string;
  name: string;
  description: string;
  url: string;
  logoUrl?: string;
}

// Root types export (aggregate)
export type { User, Group, CheckIn, Charity };
