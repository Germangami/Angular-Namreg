import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CardModule } from '../card/card.module';
import { DescriptionComponent } from './description/description.component';
import { TypeComponent } from './type/type.component';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ProductComponent,
    DescriptionComponent,
    TypeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
