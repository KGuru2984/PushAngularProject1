import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct: Product | undefined;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.getProducts();
  }
  private getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }


}
