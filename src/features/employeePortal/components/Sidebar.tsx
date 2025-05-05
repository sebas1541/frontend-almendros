import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, Users, Package, BarChart3, Settings, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
}> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'flex items-center px-4 py-3 rounded-xl text-gray-600 transition-colors',
        isActive 
          ? 'bg-primary-50 text-primary-700' 
          : 'hover:bg-gray-100'
      )}
    >
      <span className={cn('mr-3', isActive ? 'text-primary-600' : 'text-gray-500')}>{icon}</span>
      <span className="font-medium">{label}</span>
      {isActive && <div className="w-1 h-6 bg-primary-600 rounded-full ml-auto"></div>}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:z-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Employee Portal</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          <SidebarLink to="/portal" icon={<Home size={20} />} label="Dashboard" />
          <SidebarLink to="/portal/sales" icon={<ShoppingCart size={20} />} label="Sales" />
          <SidebarLink to="/portal/customers" icon={<Users size={20} />} label="Customers" />
          <SidebarLink to="/portal/products" icon={<Package size={20} />} label="Products" />
          <SidebarLink to="/portal/reports" icon={<BarChart3 size={20} />} label="Reports" />
          <SidebarLink to="/portal/settings" icon={<Settings size={20} />} label="Settings" />
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-1">Need help?</h3>
            <p className="text-sm text-gray-600 mb-3">Contact support for assistance</p>
            <a 
              href="/support" 
              className="text-primary-600 text-sm font-medium hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;