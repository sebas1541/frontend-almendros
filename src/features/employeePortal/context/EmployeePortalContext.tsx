import React, { createContext, useContext, useState, useEffect } from 'react';
import employeeService, { Product, Customer, Sale } from '../api/employeeService';
import { useToast } from '../../../shared/context/ToastContext';

interface EmployeePortalContextProps {
  products: Product[];
  customers: Customer[];
  sales: Sale[];
  currentSale: Sale | null;
  isLoading: boolean;
  setCurrentSale: (sale: Sale | null) => void;
  refreshData: () => Promise<void>;
}

const EmployeePortalContext = createContext<EmployeePortalContextProps | undefined>(undefined);

export const EmployeePortalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);
  const [currentSale, setCurrentSale] = useState<Sale | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showToast } = useToast();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Use mock data for demo
      const productsData = employeeService.getMockProducts();
      const customersData = employeeService.getMockCustomers();
      const salesData = employeeService.getMockSales();

      setProducts(productsData);
      setCustomers(customersData);
      setSales(salesData);
    } catch (error) {
      console.error('Failed to fetch employee portal data:', error);
      showToast('error', 'Failed to load data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = async () => {
    await fetchData();
    showToast('success', 'Data refreshed successfully');
  };

  // Initial data load
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EmployeePortalContext.Provider
      value={{
        products,
        customers,
        sales,
        currentSale,
        isLoading,
        setCurrentSale,
        refreshData,
      }}
    >
      {children}
    </EmployeePortalContext.Provider>
  );
};

export const useEmployeePortal = (): EmployeePortalContextProps => {
  const context = useContext(EmployeePortalContext);
  if (context === undefined) {
    throw new Error('useEmployeePortal must be used within an EmployeePortalProvider');
  }
  return context;
};