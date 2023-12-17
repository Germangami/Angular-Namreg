import {  ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '@angular/router';
import { IProduct } from 'src/app/shared/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() product: IProduct | undefined;

  @Output() buy = new EventEmitter<IProduct['_id']>();

  onProductBuy(event: Event) {
      event.stopPropagation();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.buy.emit(this.product!._id);
  }

  isStarActive(starIndex: number): boolean {
      return !!this.product && this.product.rating >= starIndex;
  }

  changeValue() {

  }

  // getPrice(value: number | null | undefined) {
  //   console.log('GET PRICE', value)
  //   return `${value}`
  // }

}