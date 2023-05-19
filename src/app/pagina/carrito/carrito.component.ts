import { Component } from '@angular/core';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  productos: DetalleCompraDTO[];
  gestionProductos: ProductoGetDTO[];
  valorTotal: number;
  textoBtnEliminar: string = "";
  seleccionados: ProductoGetDTO[];
  
  constructor(private carritoService: CarritoService, private productoService: ProductoService) {
    this.seleccionados = [];
    this.productos = [];
    this.gestionProductos = [];
    this.valorTotal = 0;
    this.textoBtnEliminar= "";
    const listaCodigos = this.carritoService.listar();
    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        const producto = this.productoService.obtener(cod);
        if (producto != null) {
          this.productos.push(new DetalleCompraDTO(producto, 1));
          this.valorTotal += producto.precio;
        }
      }
    }
  }
  public seleccionar(gestionProductos: ProductoGetDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(gestionProductos);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != gestionProductos);
    }
    this.actualizarMensaje();

  }
   private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }
  public borrarProductos(){
    this.seleccionados.forEach(e => {
    this.gestionProductos = this.gestionProductos.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
    }
}