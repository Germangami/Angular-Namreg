import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CarouselModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
