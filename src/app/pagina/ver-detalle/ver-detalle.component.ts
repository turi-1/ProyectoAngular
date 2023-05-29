import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { TokenService } from '../../servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css'],
})
export class VerDetalleComponent {
  producto: ProductoGetDTO;
  archivos!: FileList;
  categorias: string[];
  txtBoton: string = 'Crear Producto';
  esEdicion = false;
  codigoProducto: number = 0;
  alerta!: Alerta;
  filtro: ProductoGetDTO[];
  codigo: number = 0;
  obtenerProducto(codigoProducto : number) : Promise<ProductoGetDTO >{

    return new Promise<ProductoGetDTO>((resolve,reject) => {

      this.productoService.obtener(codigoProducto).subscribe({
        next: data => {
          resolve(data.respuesta);
          // this.producto = data.respuesta;
          // this.categoriaSeleccionadas = this.producto.categorias;
          // this.esEdicion = true;
        },
        error: error => {
          reject();
        },
      });
    })
  }

  constructor(
    private route: ActivatedRoute,
    private imagenService: ImagenService,
    private categoriaService: CategoriaService,
    private productoService:ProductoService,
    private carritoService: CarritoService,
    private tokenService: TokenService
  ) {
    this.categorias = [];
    this.filtro = [];
    this.producto = new ProductoGetDTO();

    this.route.params.subscribe((params) => {
      this.codigoProducto = <number>params['codigo'];
        this.obtenerProducto(this.codigoProducto).then(result => {
          this.producto = result;
      });

      console.log(this.producto);

    });
  }

  
  private cargarCategorias() {
    this.categoriaService.listar().subscribe({
      next: (data: { respuesta: string[] }) => {
        this.categorias = data.respuesta;
      },
      error: (error: { error: any }) => {
        console.log(error.error);
      },
    });
  }

  // en data.respuesta tiene que ir url al final
  
  public agregarCarrito(codigoProducto : number) {
    this.carritoService.agregar(codigoProducto);
  }
  

  public ponerFavorito(codigo : number){

    let codigoUsuario = this.tokenService.getUserId();
    this.productoService.ponerFavorito(codigoUsuario, codigo).subscribe({
      next: data => {
        this.alerta = new Alerta("Se agrego el producto correctamente", "succes");
      },
      error : error => {
        this.alerta = new Alerta(error.error.respuesta, "danger"); 
      }
    })
  }

  // public obtenerProducto(cod: number){
  //   this.productoService.obtener(cod).subscribe({
  //     next: data => {
  //       this.producto = data.respuesta;
  //     },
  //     error: (error: { error: any }) => {
  //       console.log(error.error);
  //     },
  //   });
  // }

}
