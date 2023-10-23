import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { InsertBorderModule } from 'src/app/shared/insert-border/insert-border.module';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    InsertBorderModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
