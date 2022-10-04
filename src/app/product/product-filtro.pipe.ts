import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './product';

@Pipe({
  name: 'productFiltro'
})
export class ProductFiltroPipe implements PipeTransform {

  transform(value: IProduct[],args:string): IProduct[] 
  {
    let filter:string=args ? args.toLocaleLowerCase():''; 

    return filter ? value.filter((product:IProduct)=>
    product.Modelo.toLocaleLowerCase().indexOf(filter)!= -1):value;
    
  }

}
