import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
