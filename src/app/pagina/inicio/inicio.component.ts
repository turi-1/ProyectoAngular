import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private productoServicio: ProductoService, private carritoService:CarritoService, private route:ActivatedRoute) {
    this.productos = [];
    this.route.params.subscribe(params => {
      this.codigo = params['codigo'];
    
    });
    
  }
  public agregarCarrito(){
    this.carritoService.agregar(this.codigo);
    }
  ngOnInit(): void {
    this.productos = this.productoServicio.listar();
    }
   
}