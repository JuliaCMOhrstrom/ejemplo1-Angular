import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean = true;
  listFilter:string='';

  constructor() { }

  ShowImage():void{
    this.muestraImg=!this.muestraImg;
  }

  ngOnInit(): void {
  }
  productos:any[]=[
    {
      "productoId": 1,
      "Modelo": 'Sentra',
      "Descripcion": "4 puertas familiar",
      "year":"febrero 3 2020",
      "Precio":120000,
      "Marca":"Nissan",
      "Color":"Rojo",
      "imagenUrl":"https://dam.automovilonline.com.mx/wp-content/uploads/2020/06/nissansentra202032.jpg"
    },
    {
      "productoId": 2,
      "Modelo": 'Hummer H2',
      "Descripcion": "4 puertas",
      "year":"Marzo 4 2005",
      "Precio":560000,
      "Marca":"HUMMER",
      "Color":"Arena",
      "imagenUrl":"https://wallsdesk.com/wp-content/uploads/2016/08/Hummer-H2-HD.jpg"
    }
  ]

}
