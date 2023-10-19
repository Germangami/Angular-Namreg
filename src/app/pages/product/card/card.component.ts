import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Route } from '@angular/router';
import { IProduct } from 'src/app/shared/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements  
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked 
  {

  @Input() product: IProduct | undefined;
  @Input() user: string | undefined;

  @Output() buy = new EventEmitter<IProduct['_id']>();

  constructor( ) {

  }

  // {product, user}
  // (!product.previousValue as Iproduct)
  // this.product

  ngOnChanges ({product, user}: SimpleChanges): void {
    // if (product && !(product.previousValue as IProduct) && product.currentValue) {
    //   console.log('change product 1'); 
    // }

    // if (user) {
    //   console.log('change user');
    // }
    console.log('ONCHANGES CardComponent');
  }

  ngOnInit(): void {
    console.log(this.product, 'NGONINIT CardComponent');
  }

  ngDoCheck(): void {
    console.log('DOCHECK CardComponent');
  }

  ngAfterContentInit(): void {
    console.log('AFTERCONTENTINIT CardComponent');
  }

  ngAfterContentChecked(): void {
    console.log('AFTERCONTENTCHECKED CardComponent');
  }

  ngAfterViewInit() {
    console.log('AFTERVIEWINIT CardComponent');
  }

  ngAfterViewChecked() {
    console.log('AFTERVIEWCHECKED CardComponent');
  }

  ngOnDestroy(): void {
    
  }


  onProductBuy(event: Event) {
    this.buy.emit(this.product!._id)
  }

  isStarActive(starIndex: number): boolean {
    return !!this.product && this.product.rating >= starIndex;
  }
}