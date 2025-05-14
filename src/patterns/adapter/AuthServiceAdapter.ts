import { AxiosInstance } from 'axios';
import { IAuthService } from './interfaces/IAuthService';
import { AuthResponse, LoginCredentials, RegisterData } from '../../features/auth/types';
import { AbstractApiService } from '../templateMethod/AbstractApiService';

// Servicio concreto para login
class LoginService extends AbstractApiService<LoginCredentials, AuthResponse> {
  protected getEndpoint(): string {
    return '/auth/login';
  }

  protected getHttpMethod(): 'POST' {
    return 'POST';
  }

  protected processResponseData(data: AuthResponse): AuthResponse {
    return data;
  }
}

// Servicio concreto para registro
class SignupService extends AbstractApiService<RegisterData, AuthResponse> {
  protected getEndpoint(): string {
    return '/auth/signup';
  }

  protected getHttpMethod(): 'POST' {
    return 'POST';
  }

  protected processResponseData(data: AuthResponse): AuthResponse {
    return data;
  }
}

// Servicio concreto para obtener rol del usuario
class GetUserRoleService extends AbstractApiService<void, { role: string }> {
  protected getEndpoint(): string {
    return '/auth/role';
  }

  protected processResponseData(data: { role: string }): { role: string } {
    return data;
  }
}

// Adaptador del servicio de autenticación
export class AuthServiceAdapter implements IAuthService {
  private loginService: LoginService;
  private signupService: SignupService;
  private getUserRoleService: GetUserRoleService;

  constructor(axiosInstance: AxiosInstance) {
    this.loginService = new LoginService(axiosInstance);
    this.signupService = new SignupService(axiosInstance);
    this.getUserRoleService = new GetUserRoleService(axiosInstance);
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await this.loginService.execute(credentials);
    localStorage.setItem('token', response.token);
    return response;
  }

  async signup(userData: RegisterData): Promise<AuthResponse> {
    const response = await this.signupService.execute(userData);
    localStorage.setItem('token', response.token);
    return response;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  async getCurrentUserRole(): Promise<{ role: string }> {
    return this.getUserRoleService.execute();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}