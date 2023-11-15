import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CardModule } from './card/card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
