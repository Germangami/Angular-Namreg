import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/products.api.service';
import { ProductsStore } from 'src/app/services/products.store';
import { IProduct } from 'src/app/shared/product.interface';
import { productsMock } from 'src/app/shared/products.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  soloProduct!: IProduct;
  products!: IProduct[];

  constructor(private productsApiService: ProductsApiService,
              private productsStore: ProductsStore) {

  }

  ngOnInit(): void {
    // this.productsApiService.products$.subscribe(x => {
    //   if(x) {
    //     console.log(x.data.items[0], 'PA PA PA PA');
    //     this.soloProduct = x.data.items;
    //   }
      
    // })

    this.products = productsMock.map(item => ({...item, rating: 5}));
  }

}
