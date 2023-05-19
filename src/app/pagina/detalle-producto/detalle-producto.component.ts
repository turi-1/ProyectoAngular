import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

productos: ProductoGetDTO[];
codigo: number =0;

constructor(private carritoService:CarritoService, private route:ActivatedRoute){
this.productos = [];

this.route.params.subscribe(params => {
  this.codigo = params['codigo'];

});

}
  public agregarCarrito(){
    this.carritoService.agregar(this.codigo);
    }
}
