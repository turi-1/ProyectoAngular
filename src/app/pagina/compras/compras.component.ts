import { Component } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {

   productos: ProductoGetDTO[];
   
   constructor(){
    this.productos = [];
   }
}
