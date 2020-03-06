export interface Product {
  id: string;
  title: string;
  description: string;
  features: [string];
  image: [string];
  category: string;
  in_stock: boolean;
  size: string;
  price: number;
  sale: number;
  currency: string;
  color: string;
  sku: string;
  type: string;
}
