import { Component } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

productos: ProductoGetDTO[];
codigo: number = 0;

constructor(private carritoService:CarritoService){
this.productos = [];
}

  public agregarCarrito(){
    this.carritoService.agregar(this.codigo);
    }
}
