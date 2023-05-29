import { Component } from '@angular/core';
import { ProductoGetDTO } from '../../modelo/producto-get-dto';
import { ProductoService } from '../../servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from '../../modelo/alerta';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

  productos: ProductoGetDTO[];
  alerta!: Alerta

  constructor(private productoServicio: ProductoService, private tokenService : TokenService) {
    this.productos = [];
  }
  ngOnInit(): void {
    // this.productos = this.productoServicio.listar();
    this.listarFavoritos();
  }

  listarFavoritos (){

    let id = this.tokenService.getUserId();

    this.productoServicio.listarFavoritos(id).subscribe({
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        console.log(error.error);
      }
    });

  }

  eliminarFavorito(codigo : number){

    let id = this.tokenService.getUserId();
    this.productoServicio.eliminarFavorito(codigo,id).subscribe({
      next: data => {
        this.alerta = new Alerta(data.respuesta, "danger");
        this.listarFavoritos();
      },
      error: error => {
        this.alerta = new Alerta(error.error, "danger");
      }
    })
  }
}
