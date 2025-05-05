import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from '../features/auth/components/AuthLayout';
import SignupForm from '../features/auth/components/SignupForm';
import { useAuth } from '../features/auth/context/AuthContext';

const RegisterPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/portal" replace />;
  }

  return (
    <AuthLayout 
      title="Crear Cuenta" 
      subtitle="Únete a Almendros para gestionar tu inventario y ventas"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default RegisterPage;