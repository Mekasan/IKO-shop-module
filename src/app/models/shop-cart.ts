export interface ShopCart {
  id: number;
  color: {
    code: number;
    name: string;
  };
  size: string;
  quantity: number;
  price: number;
}
