import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '@angular/router';
import { IProduct } from 'src/app/shared/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() products: IProduct[] | undefined;
  @Input() user: string | undefined;

  @Output() buy = new EventEmitter<IProduct['_id']>();

  constructor( ) { }

  ngOnInit(): void { }
}