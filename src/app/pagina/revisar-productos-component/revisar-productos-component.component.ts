import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { EstadoProductoService } from '../../servicios/estado-producto.service';
import { Alerta } from 'src/app/modelo/alerta';
import { ModeradorDTO } from '../../modelo/moderador-dto';
import { TokenService } from '../../servicios/token.service';
import { ModeradorService } from '../../servicios/moderador.service';

@Component({
  selector: 'app-revisar-productos-component',
  templateUrl: './revisar-productos-component.component.html',
  styleUrls: ['./revisar-productos-component.component.css']
})
export class RevisarProductosComponentComponent implements OnInit  {


  productos: ProductoGetDTO[];
  moderador : ModeradorDTO;
  motivo : string = "";
  estados: string[];
  codigo: number = 0;
  alerta!: Alerta;

  constructor(private productoService: ProductoService, private route: ActivatedRoute, private estadoProductoService: EstadoProductoService, private tokenService: TokenService,private  moderadorService : ModeradorService) {
    this.productos = [];
    this.estados = [];
    this.moderador = new ModeradorDTO();

    this.cargarEstados();
  }

  private cargarEstados() {
    this.estadoProductoService.listar().subscribe({
      next: data => {
        this.estados = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.errror,"danger");
      }
    });
  }


  ngOnInit(): void {
    this.listarAll();
  }

  public listarAll() {
    this.productoService.listarAll().subscribe({
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.error, "danger");
      },
    });
  }

  public listarPorEstado(estado : string){

    this.estadoProductoService.listarPorEstados(estado).subscribe({
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.error, "danger");
        
      }
      
    });

  }

  public realizarAccion(estado : string, codigo: number){
    this.moderador.estado = estado;
    this.moderador.codigo_producto = codigo;
  }

  public ponerEstado(){

    this.moderador.cedula_moderador = this.tokenService.getUserId();
    this.moderadorService.registrarAccion(this.moderador).subscribe({
      next: data => {
        this.listarAll();
      },
      error: error => {
        this.alerta = new Alerta(error.errror,"danger");
      }
    });

  }

  // public listarCategorias (){


  // }

}
