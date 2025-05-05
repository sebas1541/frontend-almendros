export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  phoneNumber?: string;
  address?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum Role {
  SALESPERSON = 'SALESPERSON',
  ADMINISTRATOR = 'ADMINISTRATOR',
}

export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: Role;
  phoneNumber?: string;
  address?: string;
}