import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Card from '../../../shared/components/Card';
import Button from '../../../shared/components/Button';
import { Product } from '../api/employeeService';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  // Placeholder image when real image is not available
  const placeholderImage = `https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`;
  
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative bg-gray-100 rounded-lg mb-4 w-full h-48 overflow-hidden">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ backgroundImage: `url(${placeholderImage})` }}
        />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      
      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          ${(product.price / 100).toFixed(2)}
        </span>
        <Button 
          size="sm" 
          variant="outline"
          icon={<ShoppingCart size={16} />}
          onClick={() => onAddToCart(product)}
        >
          Add
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;