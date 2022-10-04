import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CinepolisAngularComponent } from './cinepolis-angular/cinepolis-angular.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const appRoutes: Routes = [
  {path: '',component: ProductListComponent},
  {path: 'operas',component: OperasBasComponent},
  {path: 'cine', component: CinepolisAngularComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }