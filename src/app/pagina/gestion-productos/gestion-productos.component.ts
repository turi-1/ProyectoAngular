import { Component, OnInit } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from '../../servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent {

  productos: ProductoGetDTO[];
  textoBtnEliminar: string = "";
  seleccionados: ProductoGetDTO[];
  alerta!: Alerta;

  constructor(private productoServicio: ProductoService,  private tokenService : TokenService ) {
    this.productos = [];
    this.seleccionados = [];
    this.textoBtnEliminar = "";
  }
  ngOnInit(): void {

    this.listarProductos();
  }
  public seleccionar(producto: ProductoGetDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(producto);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != producto);
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
  public borrarProductos() {
    this.seleccionados.forEach(e => {

      this.eliminarProducto(e.codigo);
      
      this.productos = this.productos.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
  }

  public listarProductos (){

    let id = this.tokenService.getUserId();

    this.productoServicio.listar(id).subscribe({
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        console.log(error.error);
      }
    });
  }

  public eliminarProducto(codigo: number){

    this.productoServicio.eliminar(codigo).subscribe({
      next: data => {
        this.alerta =  new Alerta(data.respuesta,"succes");
      },
      error: error => {
        this.alerta =  new Alerta(error.error,"danger");
      }
    });
  }
}
