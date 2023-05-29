import { Component, OnInit, Input } from '@angular/core';
import { ComentarioService } from '../../servicios/comentario.service';
import { ComentarioDto } from '../../modelo/comentario-dto';
import { TokenService } from 'src/app/servicios/token.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

  listaComentarios: any;
  comentarioNuevo: string = "";

  @Input() codigoProducto: number = 0;


  constructor(private http: ComentarioService, private tokenService: TokenService, private route: ActivatedRoute) {
    // console.log(this.codigoProducto);

    this.route.params.subscribe((params) => {
      this.codigoProducto = <number>params['codigo'];

      this.http.obtenerComentarios(this.codigoProducto).subscribe(comentario => {

        this.listaComentarios = comentario.respuesta;
        console.log(this.listaComentarios);
      });

    });

    // console.log(this.producto);

    // });


  }

  public crearComentario() {

    let codigoVendedor = this.tokenService.getUserId();

    let data: ComentarioDto = new ComentarioDto(this.comentarioNuevo, codigoVendedor, this.codigoProducto);
    console.log(data);
    this.http.crearComentario(data).subscribe(cm => {
      console.log(cm.respuesta);
    });
  }
}