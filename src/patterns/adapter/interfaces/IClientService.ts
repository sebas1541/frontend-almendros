import { Client } from '../../../features/portal/api/clientService';

// Interfaz para el servicio de clientes
export interface IClientService {
  // Método para obtener la lista paginada de clientes
  getClients(page?: number, limit?: number): Promise<{
    data: Client[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  }>;

  // Método para obtener un cliente por su ID
  getClientById(id: number): Promise<Client>;

  // Método para crear un nuevo cliente
  createClient(data: Omit<Client, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>): Promise<Client>;

  // Método para actualizar un cliente existente
  updateClient(id: number, data: Partial<Client>): Promise<Client>;

  // Método para cambiar el estado de un cliente
  toggleClientStatus(id: number, isActive: boolean): Promise<Client>;
}