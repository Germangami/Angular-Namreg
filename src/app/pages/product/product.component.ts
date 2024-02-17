import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, take, tap } from 'rxjs';
import { ProductsApiService } from 'src/app/services/products-api/products.api.service';
import { ProductsStore } from 'src/app/services/products-api/products.store';
import { IProduct } from 'src/app/shared/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  currProd$ = this.activateRoute.paramMap.pipe(
    map(productId => productId.get('id')),
    filter(Boolean),
    tap(productId => {
      this.productsStore.currentProduct$(productId)
    }),
    switchMap(() => this.productsStore.currentProduct),
  )

  productId: string = '';
  currentProduct!: IProduct[] | undefined;

  constructor(private productsStore: ProductsStore,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }


  navigateOnDescription() {
    this.router.navigate(['./description'], {relativeTo: this.activateRoute});
  }

  navigateOnType() {
    this.router.navigate(['./type'], {relativeTo: this.activateRoute});
  }

}
