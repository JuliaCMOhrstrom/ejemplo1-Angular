import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1-Angular';
  nombre:string = "Julia Cristina";
  apaterno:string = "Monreal";

  calculaDoble(x:number):number{
    return x*2;
  }
}
