export interface LaptopData {
  ram: string;
  brand: string;
  model: string;
  price: number;
  inCartTo: string[];
  storage: number;
  image_url: string;
  processor: string;
  displaySize: number;
  operating_system: 'Windows 11' | 'Windows 10' | 'Linux' | 'macOS' | 'ChromeOS' | 'Друга';
  class: 'Business' | 'Gaming' | 'Student' | 'Premium';
  description: string | null;
  backlight:boolean
}
