import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_model/product';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<Product>;
  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.products = this.productService.findAll();
  }

}
