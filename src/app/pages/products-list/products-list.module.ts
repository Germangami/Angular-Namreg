import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { ProductsListComponent } from './products-list.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProductsListRoutingModule } from './products-list-routing.module';


@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    MatProgressSpinnerModule,
    PaginationModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ProductsListRoutingModule
  ],
  exports: [
    ProductsListComponent,
  ]
})
export class ProductsListModule { }
