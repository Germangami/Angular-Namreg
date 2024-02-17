import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SidenavModule } from './components/sidenav/sidenav.module';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { BASE_URL } from './shared/base-url/base-url.token';
import { baseUrl } from './shared/base-url/base-url.const';
import { ProductsApiService } from './services/products-api/products.api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsStore } from './services/products-api/products.store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    SidenavModule,
    MatListModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsApiService,
    ProductsStore,
    {
      provide: BASE_URL,
      useValue: baseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
