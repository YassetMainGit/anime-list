export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  likes: number;
  link: string;
  category: 'men' | 'women' | 'kids' | 'unisex';
}
