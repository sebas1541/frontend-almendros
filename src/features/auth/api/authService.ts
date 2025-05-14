import { AuthServiceAdapter } from '../../../patterns/adapter/AuthServiceAdapter';
import api from '../../../utils/axiosConfig';

// Crear una instancia del adaptador
const authServiceAdapter = new AuthServiceAdapter(api);

// Exportar el servicio adaptado
export const authService = authServiceAdapter;