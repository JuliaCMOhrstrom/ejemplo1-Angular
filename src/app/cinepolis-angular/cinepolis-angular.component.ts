import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis-angular',
  templateUrl: './cinepolis-angular.component.html',
  styleUrls: ['./cinepolis-angular.component.css']
})
export class CinepolisAngularComponent implements OnInit {

  nombre = '';
  compradores = 0;
  boletos = 0;
  mensaje='';
  tarjeta = 0;
  
  cantidad(){
    let precio = 12;
    let boletosMax=this.compradores*7;
    let total;
      if (this.boletos<=boletosMax) {
        total = this.boletos*precio;

        if (this.boletos>5) {
          total = total-(total*0.15);
        }
        else if (this.boletos >= 3) {
          total = total-(total*0.10);
        }
        if (this.tarjeta == 1) {
          total = total-(total*0.10);
        }
        this.mensaje = 'Total apagar es:' + total;

      }else{
        this.mensaje = 'Solo se puede comprar ' + boletosMax;

      }   
    }
  constructor() {
    
   }
  ngOnInit(): void {
  }

}
