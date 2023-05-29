import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from 'src/app/modelo/alerta';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CategoriaService } from '../../servicios/categoria.service';
import { TokenDTO } from '../../modelo/token-dto';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  productos: ProductoGetDTO[];
  categorias: string[];
  codigo: number = 0;
  alerta!: Alerta;

  constructor(private productoService: ProductoService, private carritoService: CarritoService, private route: ActivatedRoute, private categoriaService: CategoriaService, private tokenService: TokenService) {
    this.productos = [];
    this.categorias = [];
    this.cargarCategorias();
    this.route.params.subscribe(params => {
      this.codigo = params['codigo'];
    });

  }
  public agregarCarrito() {
    this.carritoService.agregar(this.codigo);
  }
  ngOnInit(): void {

    this.listarAll();
    // this.productos = this.productoServicio.listar();
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

  private cargarCategorias() {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.errror, "danger");
      }
    });
  }

  public ponerFavorito(codigo: number) {

    let codigoUsuario = this.tokenService.getUserId();

    if (codigoUsuario == 0) {
      this.alerta = new Alerta("debes iniciar sesion", "danger");
      return;
    }

    this.productoService.ponerFavorito(codigoUsuario, codigo).subscribe({
      next: data => {
        this.alerta = new Alerta("Se agrego el producto correctamente", "succes");
      },
      error: error => {
        this.alerta = new Alerta(error.console.error, "danger");
      }
    })
  }

  public ponerCarrito(codigo: number) {
    this.carritoService.agregar(codigo);
  }

  public listarPorCategoria(categoria : string){

    this.categoriaService.listarPorCategoria(categoria).subscribe({
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.error, "danger");
      }
      
    });

  }


}