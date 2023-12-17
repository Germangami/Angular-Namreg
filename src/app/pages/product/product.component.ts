import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/shared/product.interface';
import { productsMock } from 'src/app/shared/products.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() testProduct: any;

  counter: any;

  products!: IProduct[];


  constructor(private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly applicationRef: ApplicationRef) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.changeDetectorRef.markForCheck();
      this.products = productsMock;
    }, 3000);
    setTimeout(() => {
      this.changeDetectorRef.markForCheck();
      this.products = productsMock.map(item => ({...item, rating: 5}));
    }, 1000);
    this.changeDetectorRef.detectChanges() 
  }

  get getFilteredProduct() {

    return this.products; //sorting
  }

  trackBy(index: number, item: IProduct) {
    return item._id;
  }

}
