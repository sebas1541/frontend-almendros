import React from 'react';
import { Mail, Lock, User, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import Card from '../../../shared/components/Card';
import { useRegisterForm } from '../hooks/useRegisterForm';

const SignupForm: React.FC = () => {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } = useRegisterForm();

  return (
    <Card className="w-full max-w-md mx-auto animate-slide-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Crear Cuenta</h2>
        <p className="text-gray-600 mt-2">Únete a Almendros para gestionar tus suministros de tarjetas</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="firstName"
            name="firstName"
            type="text"
            label="Nombre"
            placeholder="Juan"
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
            icon={<User size={18} />}
            autoComplete="given-name"
            required
          />

          <Input
            id="lastName"
            name="lastName"
            type="text"
            label="Apellido"
            placeholder="Pérez"
            value={formData.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
            icon={<User size={18} />}
            autoComplete="family-name"
            required
          />
        </div>

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
          autoComplete="new-password"
          required
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirmar Contraseña"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPassword}
          icon={<Lock size={18} />}
          autoComplete="new-password"
          required
        />

        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          label="Teléfono (opcional)"
          placeholder="+1 (555) 123-4567"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={errors.phoneNumber}
          icon={<Phone size={18} />}
          autoComplete="tel"
        />

        <Input
          id="address"
          name="address"
          type="text"
          label="Dirección (opcional)"
          placeholder="Calle Principal #123, Ciudad"
          value={formData.address}
          onChange={handleInputChange}
          error={errors.address}
          icon={<MapPin size={18} />}
          autoComplete="street-address"
        />

        <div className="mt-2 mb-6">
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              Acepto los{' '}
              <Link to="/terms" className="text-primary-600 hover:underline">
                Términos de Servicio
              </Link>{' '}
              y la{' '}
              <Link to="/privacy" className="text-primary-600 hover:underline">
                Política de Privacidad
              </Link>
            </label>
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          className="transition-all duration-300 mb-4"
        >
          Crear Cuenta
        </Button>
        
        <div className="text-center">
          <span className="text-gray-600 text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-primary-600 hover:underline">
              Iniciar Sesión
            </Link>
          </span>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;