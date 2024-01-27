import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { ProductsStore } from 'src/app/services/products.store';
import { IProduct } from 'src/app/shared/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  currProd$ = this.activateRoute.paramMap.pipe(
    map(productId => productId.get('id')),
    filter(Boolean),
    tap(productId => this.productsStore.currentProduct$(productId)),
    switchMap(() => this.productsStore.currentProduct)
  )

  productId: string = '';
  currentProduct!: IProduct[] | undefined;

  constructor(private productsStore: ProductsStore,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.findParamMap();
    this.findCurrentProduct();
  }

  findParamMap() {
    this.activateRoute.paramMap.pipe(
      map(x => x.get('id')),
    ).subscribe(x => {
      if (x) {
        // console.log(x, 'X IN FIND PARAM');
        this.productId = x;
      }
    })
  }


  findCurrentProduct() {
    this.productsStore.products$.subscribe(product => {
      let prod;
      // console.log(product, 'CURRENT');
      
      if (product) prod = product.filter(item => item._id === this.productId)
      this.currentProduct = prod;
    })
  }

  navigateOnDescription() {
    this.router.navigate(['./description'], {relativeTo: this.activateRoute});
  }

  navigateOnType() {
    this.router.navigate(['./type'], {relativeTo: this.activateRoute});
  }

}
