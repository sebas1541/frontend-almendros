import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

// Clase abstracta base para servicios API
export abstract class AbstractApiService<PayloadType = unknown, ResponseType = unknown, ErrorType = AxiosError> {
  constructor(protected readonly axiosInstance: AxiosInstance) {}

  // Método plantilla que define el esqueleto del proceso de llamada a la API
  public async execute(payload?: PayloadType): Promise<ResponseType> {
    try {
      // Preparar la configuración de la solicitud
      const config = await this.prepareConfig();
      
      // Obtener el endpoint
      const endpoint = this.getEndpoint();
      
      // Preparar el cuerpo de la solicitud si existe payload
      const body = payload ? this.prepareBody(payload) : undefined;
      
      // Realizar la solicitud HTTP
      const response = await this.makeHttpRequest(endpoint, body, config);
      
      // Procesar y retornar los datos de la respuesta
      return this.processResponseData(response.data);
    } catch (error) {
      // Manejar cualquier error que ocurra
      return this.handleApiError(error as ErrorType);
    }
  }

  // Métodos abstractos que deben ser implementados por las clases concretas
  protected abstract getEndpoint(): string;
  protected abstract processResponseData(data: any): ResponseType;

  // Métodos que pueden ser sobrescritos por las clases concretas
  protected prepareConfig(): Promise<AxiosRequestConfig> {
    return Promise.resolve({});
  }

  protected prepareBody(payload: PayloadType): any {
    return payload;
  }

  protected async makeHttpRequest(
    endpoint: string,
    body?: any,
    config?: AxiosRequestConfig
  ) {
    const method = this.getHttpMethod();
    
    switch (method) {
      case 'GET':
        return this.axiosInstance.get(endpoint, config);
      case 'POST':
        return this.axiosInstance.post(endpoint, body, config);
      case 'PUT':
        return this.axiosInstance.put(endpoint, body, config);
      case 'PATCH':
        return this.axiosInstance.patch(endpoint, body, config);
      case 'DELETE':
        return this.axiosInstance.delete(endpoint, config);
      default:
        throw new Error(`Método HTTP no soportado: ${method}`);
    }
  }

  protected getHttpMethod(): 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' {
    return 'GET';
  }

  protected handleApiError(error: ErrorType): never {
    throw error;
  }
}

export { AbstractApiService }