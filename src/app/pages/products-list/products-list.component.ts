import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsStore } from 'src/app/services/products.store';
import { IProduct } from 'src/app/shared/product.interface';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {
  productsList$!: Observable<IProduct[] | null>;

  constructor(
    private readonly productsStore: ProductsStore,
  ) {}

  ngOnInit(): void {
    this.productsList$ = this.productsStore.products$;
  }
}
