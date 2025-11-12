export interface Product {
  id: number;
  categories: string[];
  flowerTypes: string[];
  image: string;
  title: string;
  quantity: number;
  description: string;
  price: number;
  features: { label: string; value: string }[];
  careTips: string[];
}
