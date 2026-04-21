export interface Laptop {
  id?: string;
  ownerID?: string;
  createdAt?: string;
  brand: string;
  model: string;
  imageUrl: string;
  price: number;
  processor: string;
  ram: string;
  storage: string;
  displaySize: number;
  operatingSystem: string;
  description: string;
  inCartByUserIds?: string[];
}