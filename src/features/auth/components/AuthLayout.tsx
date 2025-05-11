import React from 'react';
import { LeafyGreen } from 'lucide-react';

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <LeafyGreen className="h-12 w-12 text-primary-600" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
        
        {children}
        
        <p className="mt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Almendros. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;