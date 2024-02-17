import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { DescriptionComponent } from './description/description.component';
import { TypeComponent } from './type/type.component';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';



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
    MatProgressSpinnerModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
