import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/shared/product.interface';
import { productsMock } from 'src/app/shared/products.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  product!: IProduct;

  constructor() {
    console.log('CONSTRUCTOR ProductComponent')
   }

  ngOnChanges ({product, user}: SimpleChanges): void {
    // if (product && !(product.previousValue as IProduct) && product.currentValue) {
    //   console.log('change product 1'); 
    // }

    // if (user) {
    //   console.log('change user');
    // }
    console.log('ONCHANGES ProductComponent');
  }

  ngOnInit(): void {
    this.product = productsMock[0];
  }

  checkIdProduct(event: string) {
    console.log(event, 'ID_PRODUCT');
  }

  // {product, user}
  // (!product.previousValue as Iproduct)
  // this.product

  ngDoCheck(): void {
    console.log('DOCHECK ProductComponent');
  }

  ngAfterContentInit(): void {
    console.log('AFTERCONTENTINIT ProductComponent');
  }

  ngAfterContentChecked(): void {
    console.log('AFTERCONTENTCHECKED ProductComponent');
  }

  ngAfterViewInit() {
    console.log('AFTERVIEWINIT ProductComponent');
  }

  ngAfterViewChecked() {
    console.log('AFTERVIEWCHECKED ProductComponent');
  }

}
