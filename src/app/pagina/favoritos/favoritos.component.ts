import { Component } from '@angular/core';
import { ProductoGetDTO } from '../../modelo/producto-get-dto';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

  productos: ProductoGetDTO[];

  constructor(private productoServicio: ProductoService) {
    this.productos = [];
  }
  ngOnInit(): void {
    this.productos = this.productoServicio.listar();
  }
}
