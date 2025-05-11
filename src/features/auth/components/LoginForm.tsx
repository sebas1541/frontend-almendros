import React from 'react';
import { Mail, Lock } from 'lucide-react';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import Card from '../../../shared/components/Card';
import { useLoginForm } from '../hooks/useLoginForm';

const LoginForm: React.FC = () => {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } = useLoginForm();

  return (
    <Card className="w-full max-w-md mx-auto animate-slide-up">
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Correo Electrónico"
          placeholder="tu@ejemplo.com"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          icon={<Mail size={18} />}
          autoComplete="email"
          required
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          icon={<Lock size={18} />}
          autoComplete="current-password"
          required
        />
        
        <div className="flex items-center justify-between mb-6 mt-2">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Recordarme
            </label>
          </div>
          <div className="text-sm">
            <a href="/forgot-password" className="text-primary-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          className="transition-all duration-300"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;