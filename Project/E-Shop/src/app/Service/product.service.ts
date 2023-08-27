import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private productSubject$ = new BehaviorSubject<any[]>([]);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  blogPosts: any[] = [];

  private newPosts: Product[] = []; // Array to store local posts
  

  constructor(private httpClient: HttpClient) {
    this.fetchProducts();
  }
  getProducts(): Observable<Product[]> {
    return this.productSubject$.asObservable();
  }

  fetchProducts() {
    this.httpClient.get<Product[]>(this.apiUrl).pipe(
      tap((newPosts) => {
        this.newPosts = newPosts;
        this.productSubject$.next([...this.newPosts]);
      })
    ).subscribe();
  }

  getProductById(productId: number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.httpClient.get<any>(url);
  }
}
