import { ClientServiceAdapter } from '../../../patterns/adapter/ClientServiceAdapter';
import api from '../../../utils/axiosConfig';

// Crear una instancia del adaptador
const clientServiceAdapter = new ClientServiceAdapter(api);

// Exportar el servicio adaptado
export const clientService = clientServiceAdapter;

// Re-exportar los tipos existentes para mantener la compatibilidad
export interface Client {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  documentType: string;
  documentNumber: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}