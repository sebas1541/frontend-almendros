import React from 'react';
import { Sale } from '../api/employeeService';
import Card from '../../../shared/components/Card';
import Button from '../../../shared/components/Button';

interface SaleSummaryProps {
  sale: Sale;
  onClose: () => void;
}

const SaleSummary: React.FC<SaleSummaryProps> = ({ sale, onClose }) => {
  const formattedDate = new Date(sale.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  
  const subtotal = sale.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.19; // 19% tax
  const total = subtotal + tax;
  
  return (
    <Card className="animate-slide-up">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Sale #{sale.id}</h2>
          <p className="text-gray-600">{formattedDate}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Customer</p>
          <p className="font-medium text-gray-900">{sale.customerName}</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4 mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Items</h3>
        <div className="space-y-3">
          {sale.items.map((item, index) => (
            <div key={`${item.productId}-${index}`} className="flex justify-between">
              <div>
                <p className="font-medium">{item.productName}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${(item.price * item.quantity / 100).toFixed(2)}</p>
                <p className="text-sm text-gray-600">${(item.price / 100).toFixed(2)} each</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">${(subtotal / 100).toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Tax (19%)</p>
          <p className="font-medium">${(tax / 100).toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <p>Total</p>
          <p>${(total / 100).toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex justify-end space-x-3">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button>
          Print Receipt
        </Button>
      </div>
    </Card>
  );
};

export default SaleSummary;