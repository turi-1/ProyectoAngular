import { Component } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  productos: ProductoGetDTO[];
  codigo: number = 0;

  constructor(private productoServicio: ProductoService, private carritoService:CarritoService) {
    this.productos = [];
  }
  ngOnInit(): void {
    this.productos = this.productoServicio.listar();
    }
    public agregarCarrito(){
      this.carritoService.agregar(this.codigo);
      }
}
