import { AuthResponse, LoginCredentials, RegisterData, User } from '../../../features/auth/types';

// Interfaz para el servicio de autenticación
export interface IAuthService {
  // Método para iniciar sesión
  login(credentials: LoginCredentials): Promise<AuthResponse>;
  
  // Método para registrar un nuevo usuario
  signup(userData: RegisterData): Promise<AuthResponse>;
  
  // Método para cerrar sesión
  logout(): void;
  
  // Método para obtener el rol del usuario actual
  getCurrentUserRole(): Promise<{ role: string }>;
  
  // Método para obtener el token de autenticación
  getToken(): string | null;
  
  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean;
}