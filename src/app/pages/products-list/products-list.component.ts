import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsStore } from 'src/app/services/products-api/products.store';
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

  counter = new FormControl(4, [Validators.max(6)]);

  constructor(
    private readonly productsStore: ProductsStore
  ) {}

  ngOnInit(): void {
    this.productsList$ = this.productsStore.products$;
  }
}
