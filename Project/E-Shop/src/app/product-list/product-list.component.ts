import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';

  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe((data: Product[])=>{
      this.products = data;
    }); 
  }

  searchProducts(): void {
    if(this.searchQuery) {
      this.products = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    else {
      this.getProduct();
    }
  }
}
