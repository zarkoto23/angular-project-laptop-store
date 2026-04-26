export interface LaptopData {
  ram: number
  brand: string;
  model: string;
  price: number;
  in_cart_to: string[];
  storage: number;
  image_url: string;
  processor: string;
  display_size: number;
  operating_system: 'Windows 11' | 'Windows 10' | 'Linux' | 'macOS' | 'ChromeOS'|'FreeDOS'|'Друга',
  class: 'Business' | 'Gaming' | 'Student' | 'Premium'|'Друго';
  description: string | null;
  backlight:boolean
}
