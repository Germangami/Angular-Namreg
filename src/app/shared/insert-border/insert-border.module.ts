import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertBorderDirective } from './insert-border.directive';



@NgModule({
  declarations: [
    InsertBorderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InsertBorderDirective
  ]
})
export class InsertBorderModule { }
