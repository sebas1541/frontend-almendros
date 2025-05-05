import React from 'react';
import { useAuth } from '../../../auth/context/AuthContext';
import { Role } from '../../../auth/types';
import Card from '../../../../shared/components/Card';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === Role.ADMINISTRATOR;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Bienvenido, {user?.firstName}</h1>
          <p className="text-gray-600 mt-1">
            {isAdmin 
              ? 'Aquí está el resumen de la actividad del negocio'
              : 'Aquí está el resumen de tus ventas'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-medium text-gray-700 mb-1">Ventas de Hoy</h3>
          <p className="text-3xl font-bold text-gray-900">$0.00</p>
          <p className="text-sm text-gray-600 mt-1">Sin ventas aún</p>
        </Card>
        
        <Card>
          <h3 className="text-lg font-medium text-gray-700 mb-1">Productos Vendidos</h3>
          <p className="text-3xl font-bold text-gray-900">0</p>
          <p className="text-sm text-gray-600 mt-1">Sin ventas aún</p>
        </Card>
        
        <Card>
          <h3 className="text-lg font-medium text-gray-700 mb-1">
            {isAdmin ? 'Empleados Activos' : 'Clientes Nuevos'}
          </h3>
          <p className="text-3xl font-bold text-gray-900">0</p>
          <p className="text-sm text-gray-600 mt-1">Sin datos aún</p>
        </Card>
      </div>

      <Card>
        <div className="text-center py-8">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No hay datos para mostrar
          </h3>
          <p className="text-gray-600">
            Los datos aparecerán aquí una vez que comience la actividad.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;