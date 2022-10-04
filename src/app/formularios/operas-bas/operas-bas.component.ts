import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1='';
  num2='';
  num3='';
  resultado:number=0;
  texto:string[]=[];
  imprimir='';

  suma(){
    this.resultado=parseInt(this.num1)+ parseInt(this.num2);
  }

  multiplicar(){
    let texto:string[] = [];

    for (let i= 1; i<= 10 ; i++) {
      texto.push(this.num3 + 'x' + i + '=' + [parseInt(this.num3)*i] );
    }
    this.texto=texto;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
