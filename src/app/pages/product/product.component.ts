import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/shared/product.interface';
import { productsMock } from 'src/app/shared/products.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products!: IProduct[];

  constructor() { }


  ngOnInit(): void {
    this.products = productsMock;
  }

}
