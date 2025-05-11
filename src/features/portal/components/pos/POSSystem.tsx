import React from 'react';
import Card from '../../../../shared/components/Card';

const POSSystem: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Sistema POS</h1>
          <p className="text-gray-600 mt-1">Gestiona las ventas y transacciones</p>
        </div>
      </div>

      <Card>
        <div className="text-center py-8">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Sistema POS en desarrollo
          </h3>
          <p className="text-gray-600">
            Esta funcionalidad estará disponible próximamente.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default POSSystem;