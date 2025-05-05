import api from '../../../utils/axiosConfig';
import { AuthResponse, LoginCredentials, RegisterData } from '../types';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    
    // Store the token in localStorage
    localStorage.setItem('token', response.data.token);
    
    return response.data;
  },
  
  signup: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/signup', userData);
    
    // Store the token in localStorage
    localStorage.setItem('token', response.data.token);
    
    return response.data;
  },
  
  logout: (): void => {
    localStorage.removeItem('token');
  },
  
  getCurrentUserRole: async (): Promise<{ role: string }> => {
    const response = await api.get<{ role: string }>('/auth/role');
    return response.data;
  },
  
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },
  
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  }
};