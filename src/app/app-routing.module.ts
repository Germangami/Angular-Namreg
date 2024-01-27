import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DescriptionComponent } from './pages/product/description/description.component';
import { TypeComponent } from './pages/product/type/type.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products-list'
  },
  {
    path: 'products-list',
    component: ProductsListComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    children: [
      {
        path: 'description',
      component: DescriptionComponent
      },
      {
        path: 'type',
        component: TypeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'description'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NotFoundModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
