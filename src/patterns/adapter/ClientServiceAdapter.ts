import { AxiosInstance } from 'axios';
import { IClientService } from './interfaces/IClientService';
import { Client } from '../../features/portal/api/clientService';
import { AbstractApiService } from '../templateMethod/AbstractApiService';

// Servicio concreto para obtener clientes
class GetClientsService extends AbstractApiService<{ page: number; limit: number }, { data: Client[]; meta: any }> {
  protected getEndpoint(): string {
    const { page = 1, limit = 10 } = this.payload || {};
    return `/clients?page=${page}&limit=${limit}`;
  }

  private payload?: { page: number; limit: number };

  public setPayload(payload: { page: number; limit: number }) {
    this.payload = payload;
  }

  protected processResponseData(data: { data: Client[]; meta: any }): { data: Client[]; meta: any } {
    return data;
  }
}

// Servicio concreto para obtener un cliente por ID
class GetClientByIdService extends AbstractApiService<number, Client> {
  protected getEndpoint(): string {
    return `/clients/${this.clientId}`;
  }

  private clientId!: number;

  public setClientId(id: number) {
    this.clientId = id;
  }

  protected processResponseData(data: { client: Client }): Client {
    return data.client;
  }
}

// Servicio concreto para crear un cliente
class CreateClientService extends AbstractApiService<Omit<Client, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>, Client> {
  protected getEndpoint(): string {
    return '/clients';
  }

  protected getHttpMethod(): 'POST' {
    return 'POST';
  }

  protected processResponseData(data: { client: Client }): Client {
    return data.client;
  }
}

// Servicio concreto para actualizar un cliente
class UpdateClientService extends AbstractApiService<{ id: number; data: Partial<Client> }, Client> {
  protected getEndpoint(): string {
    return `/clients/${this.payload?.id}`;
  }

  private payload?: { id: number; data: Partial<Client> };

  public setPayload(payload: { id: number; data: Partial<Client> }) {
    this.payload = payload;
  }

  protected getHttpMethod(): 'PATCH' {
    return 'PATCH';
  }

  protected prepareBody(): Partial<Client> {
    return this.payload!.data;
  }

  protected processResponseData(data: { client: Client }): Client {
    return data.client;
  }
}

// Servicio concreto para cambiar el estado de un cliente
class ToggleClientStatusService extends AbstractApiService<{ id: number; isActive: boolean }, Client> {
  protected getEndpoint(): string {
    return `/clients/${this.payload?.id}/toggle-active`;
  }

  private payload?: { id: number; isActive: boolean };

  public setPayload(payload: { id: number; isActive: boolean }) {
    this.payload = payload;
  }

  protected getHttpMethod(): 'PATCH' {
    return 'PATCH';
  }

  protected prepareBody(): { isActive: boolean } {
    return { isActive: this.payload!.isActive };
  }

  protected processResponseData(data: { client: Client }): Client {
    return data.client;
  }
}

// Adaptador del servicio de clientes
export class ClientServiceAdapter implements IClientService {
  private getClientsService: GetClientsService;
  private getClientByIdService: GetClientByIdService;
  private createClientService: CreateClientService;
  private updateClientService: UpdateClientService;
  private toggleClientStatusService: ToggleClientStatusService;

  constructor(axiosInstance: AxiosInstance) {
    this.getClientsService = new GetClientsService(axiosInstance);
    this.getClientByIdService = new GetClientByIdService(axiosInstance);
    this.createClientService = new CreateClientService(axiosInstance);
    this.updateClientService = new UpdateClientService(axiosInstance);
    this.toggleClientStatusService = new ToggleClientStatusService(axiosInstance);
  }

  async getClients(page = 1, limit = 10) {
    this.getClientsService.setPayload({ page, limit });
    return this.getClientsService.execute();
  }

  async getClientById(id: number): Promise<Client> {
    this.getClientByIdService.setClientId(id);
    return this.getClientByIdService.execute();
  }

  async createClient(data: Omit<Client, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>): Promise<Client> {
    return this.createClientService.execute(data);
  }

  async updateClient(id: number, data: Partial<Client>): Promise<Client> {
    this.updateClientService.setPayload({ id, data });
    return this.updateClientService.execute();
  }

  async toggleClientStatus(id: number, isActive: boolean): Promise<Client> {
    this.toggleClientStatusService.setPayload({ id, isActive });
    return this.toggleClientStatusService.execute();
  }
}