export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  link: string;
  category: 'ongoing' | 'watched' | 'not-finished' | 'planned';
  showDivider: boolean;
}
