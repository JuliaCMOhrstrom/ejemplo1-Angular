import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule} from'@angular/forms';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFiltroPipe } from './product/product-filtro.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { MenuComponent } from './menu/menu.component';
import { CinepolisAngularComponent } from './cinepolis-angular/cinepolis-angular.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFiltroPipe,
    OperasBasComponent,
    MenuComponent,
    CinepolisAngularComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
