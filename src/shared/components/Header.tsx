import React from 'react';
import { LeafyGreen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 md:px-10 flex items-center justify-center bg-white shadow-sm">
      <div className="flex items-center">
        <LeafyGreen className="h-8 w-8 text-primary-600" />
        <span className="ml-2 text-xl font-medium text-gray-900">Almendros</span>
      </div>
    </header>
  );
};

export default Header;