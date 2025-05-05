import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle, children }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div
        className={cn(
          'fixed inset-x-0 top-[4rem] bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out transform',
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        )}
      >
        <div className="p-4 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;