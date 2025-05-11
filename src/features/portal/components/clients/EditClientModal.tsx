import React, { useState } from 'react';
import { X, Mail, User, Phone, MapPin, FileText } from 'lucide-react';
import { Client } from '../../api/clientService';
import Button from '../../../../shared/components/Button';
import Input from '../../../../shared/components/Input';

interface EditClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: Client;
  onSave: (data: Partial<Client>) => Promise<void>;
}

const EditClientModal: React.FC<EditClientModalProps> = ({
  isOpen,
  onClose,
  client,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    name: client.name,
    email: client.email,
    phoneNumber: client.phoneNumber,
    address: client.address,
    documentType: client.documentType,
    documentNumber: client.documentNumber,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!formData.documentNumber) {
      newErrors.documentNumber = 'El número de documento es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSave(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-apple-md w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Editar Cliente</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <Input
            label="Nombre Completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            icon={<User size={18} />}
            required
          />

          <Input
            label="Correo Electrónico"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            icon={<Mail size={18} />}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Documento
              </label>
              <select
                value={formData.documentType}
                onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="NIT">NIT</option>
                <option value="PP">Pasaporte</option>
              </select>
            </div>

            <Input
              label="Número de Documento"
              value={formData.documentNumber}
              onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
              error={errors.documentNumber}
              icon={<FileText size={18} />}
              required
            />
          </div>

          <Input
            label="Teléfono"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            icon={<Phone size={18} />}
          />

          <Input
            label="Dirección"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            icon={<MapPin size={18} />}
          />

          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancelar
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              Guardar Cambios
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClientModal;