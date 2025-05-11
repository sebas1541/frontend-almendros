import api from '../../../utils/axiosConfig';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
}

export interface Sale {
  id: string;
  customerId: string;
  customerName: string;
  total: number;
  date: string;
  items: SaleItem[];
}

export interface SaleItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

// Employee service
const employeeService = {
  // Products
  getProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
  },

  // Customers
  getCustomers: async (): Promise<Customer[]> => {
    const response = await api.get('/customers');
    return response.data;
  },

  // Sales
  getSales: async (): Promise<Sale[]> => {
    const response = await api.get('/sales');
    return response.data;
  },

  // Mock implementation for demo purposes
  // Replace with real API calls when backend is ready
  getMockProducts: (): Product[] => {
    return [
      {
        id: '1',
        name: 'Tarjeta de Presentación',
        price: 2800,
        imageUrl: '/products/business-card-1.jpg',
        category: 'Business',
      },
      {
        id: '2',
        name: 'Tarjeta de Empresa',
        price: 1700,
        imageUrl: '/products/business-card-2.jpg',
        category: 'Business',
      },
      {
        id: '3',
        name: 'Tarjeta de Amor',
        price: 1500,
        imageUrl: '/products/love-card.jpg',
        category: 'Personal',
      },
      {
        id: '4',
        name: 'Tarjeta de Cocina',
        price: 1200,
        imageUrl: '/products/kitchen-card.jpg',
        category: 'Specialty',
      },
      {
        id: '5',
        name: 'Tarjeta de Servicio',
        price: 2200,
        imageUrl: '/products/service-card.jpg',
        category: 'Business',
      },
      {
        id: '6',
        name: 'Tarjeta de Cumpleaños',
        price: 4700,
        imageUrl: '/products/birthday-card.jpg',
        category: 'Personal',
      },
      {
        id: '7',
        name: 'Tarjeta de Navidad',
        price: 1800,
        imageUrl: '/products/christmas-card.jpg',
        category: 'Personal',
      },
      {
        id: '8',
        name: 'Tarjeta de Información',
        price: 2200,
        imageUrl: '/products/info-card.jpg',
        category: 'Business',
      },
    ];
  },

  getMockSales: (): Sale[] => {
    return [
      {
        id: '12564878',
        customerId: '1',
        customerName: 'Óscar G.',
        total: 7200,
        date: '2024-11-04T10:00:00',
        items: [
          {
            productId: '1',
            productName: 'Tarjeta de Presentación',
            price: 2800,
            quantity: 1,
          },
          {
            productId: '4',
            productName: 'Tarjeta de Cocina',
            price: 1200,
            quantity: 1,
          },
          {
            productId: '5',
            productName: 'Tarjeta de Servicio',
            price: 2200,
            quantity: 1,
          },
        ],
      },
      {
        id: '12564877',
        customerId: '2',
        customerName: 'María L.',
        total: 9400,
        date: '2024-11-03T15:30:00',
        items: [
          {
            productId: '6',
            productName: 'Tarjeta de Cumpleaños',
            price: 4700,
            quantity: 2,
          },
        ],
      },
    ];
  },

  getMockCustomers: (): Customer[] => {
    return [
      {
        id: '1',
        name: 'Óscar G.',
        email: 'oscar@example.com',
      },
      {
        id: '2',
        name: 'María L.',
        email: 'maria@example.com',
      },
      {
        id: '3',
        name: 'Juan P.',
        email: 'juan@example.com',
      },
    ];
  },
};

export default employeeService;