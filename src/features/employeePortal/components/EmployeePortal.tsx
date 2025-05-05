import React, { useState } from 'react';
import { useEmployeePortal } from '../context/EmployeePortalContext';
import { PlusCircle, RefreshCw } from 'lucide-react';
import Button from '../../../shared/components/Button';
import Card from '../../../shared/components/Card';
import Spinner from '../../../shared/components/Spinner';
import ProductCard from './ProductCard';
import SaleSummary from './SaleSummary';
import PortalHeader from './PortalHeader';
import Sidebar from './Sidebar';

const EmployeePortal: React.FC = () => {
  const { products, sales, isLoading, currentSale, setCurrentSale, refreshData } = useEmployeePortal();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddToCart = (product: any) => {
    console.log('Adding to cart:', product);
    // This would be implemented with real cart functionality
  };

  const handleSaleClick = (sale: any) => {
    setCurrentSale(sale);
  };

  const handleCloseSaleSummary = () => {
    setCurrentSale(null);
  };

  // Get the most recent sale
  const latestSale = sales[0];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <PortalHeader toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-auto p-6">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
                  <p className="text-gray-600 mt-1">Here's what's happening with your store today.</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <Button 
                    variant="outline" 
                    icon={<RefreshCw size={16} />}
                    onClick={() => refreshData()}
                  >
                    Refresh
                  </Button>
                  <Button icon={<PlusCircle size={16} />}>
                    New Sale
                  </Button>
                </div>
              </div>
              
              {currentSale ? (
                <SaleSummary sale={currentSale} onClose={handleCloseSaleSummary} />
              ) : (
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <h3 className="text-lg font-medium text-gray-700 mb-1">Today's Sales</h3>
                      <p className="text-3xl font-bold text-gray-900">$1,256.00</p>
                      <p className="text-sm text-green-600 mt-1">+5.2% from yesterday</p>
                    </Card>
                    <Card>
                      <h3 className="text-lg font-medium text-gray-700 mb-1">Products Sold</h3>
                      <p className="text-3xl font-bold text-gray-900">42</p>
                      <p className="text-sm text-green-600 mt-1">+12% from yesterday</p>
                    </Card>
                    <Card>
                      <h3 className="text-lg font-medium text-gray-700 mb-1">New Customers</h3>
                      <p className="text-3xl font-bold text-gray-900">8</p>
                      <p className="text-sm text-red-600 mt-1">-2% from yesterday</p>
                    </Card>
                  </div>
                
                  {/* Recent Sale */}
                  {latestSale && (
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Sale</h2>
                      <Card>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-lg font-medium text-gray-900">Sale #{latestSale.id}</h3>
                              <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                Completed
                              </span>
                            </div>
                            <p className="text-gray-600 mt-1">
                              Customer: {latestSale.customerName} • {new Date(latestSale.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0 flex items-center">
                            <p className="text-xl font-bold text-gray-900 mr-4">
                              ${(latestSale.total / 100).toFixed(2)}
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleSaleClick(latestSale)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}
                
                  {/* Popular Products */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {products.slice(0, 4).map((product) => (
                        <ProductCard 
                          key={product.id} 
                          product={product} 
                          onAddToCart={handleAddToCart} 
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default EmployeePortal;