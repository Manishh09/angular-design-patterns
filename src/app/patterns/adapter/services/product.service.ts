import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductAdapter } from './product-adapter.service';
import { map, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { ExternalProduct } from '../interfaces/externnal-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private productAdapter: ProductAdapter) { }


  getProducts(): Observable<Product[]> {
    // Uncomment the following line to use dummy data instead of making an HTTP request
    // use this if you have proper API 

    // return this.http.get<ExternalProduct[]>('api/v1/products').pipe(
    //   map((products) => products.map((product: ExternalProduct) => this.productAdapter.adapt(product)))
    // )

    return of(this.getDummyProducts()).pipe(
      map((products) => products.map((product: ExternalProduct) => this.productAdapter.adapt(product)))
    );
 
  }

  getDummyProducts(): ExternalProduct[] {
    return [
      {
        product_id: 1,
        product_name: 'Product 1',
        product_price: 100,
         
      },
      {
        product_id: 2,
        product_name: 'Product 2',
        product_price: 200,
         
      },
      {
        product_id: 3,
        product_name: 'Product 3',
        product_price: 300,
         
      },
    ];
  }
}
