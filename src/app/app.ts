import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from './data/products';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nextImage(product: any){
    if(product.currentImage < product.images.length - 1){
      product.currentImage++;
    } else {
      product.currentImage = 0;
    }
  }

  prevImage(product: any){
    if(product.currentImage > 0){
      product.currentImage--;
    } else {
      product.currentImage = product.images.length - 1;
    }
  }
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = PRODUCTS;

  searchText = '';
  selectedCategory = '';

  filterCategory(category: string){
    this.selectedCategory = category;
    this.applyFilters();
  }
  showAllProducts() {
    this.selectedCategory = '';
    this.searchText = '';
    this.applyFilters();
  }

  search(){
    this.applyFilters();
  }

  sortByRating(){
    this.filteredProducts = [...this.filteredProducts].sort((a,b)=> b.rating - a.rating);
  }

  applyFilters(){
    this.filteredProducts = this.products.filter(p =>
      (this.selectedCategory === '' || p.category === this.selectedCategory) &&
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
