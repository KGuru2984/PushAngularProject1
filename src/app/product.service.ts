import { Injectable } from '@angular/core';
import { Product } from './product';
import { map, Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface ProductDTO {
  productid?:any;
  name: string;
  price: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl ="http://localhost:8080/product/";

    constructor(private http: HttpClient) { }


    getProducts(): Observable<Product[]> {
      return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
        map(products => products.map(product => {
          return this.convertToProduct(product);
        }))
      );
    }
  
    private convertToProduct(product: ProductDTO): Product {
      return {
        productid: product.productid,
        name: product.name,
        price: product.price
      };
    }
  

}
