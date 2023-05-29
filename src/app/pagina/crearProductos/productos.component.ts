import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from 'src/app/modelo/alerta';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  producto: ProductoDTO;
  archivos!: FileList;
  categorias: string[];
  categoriaSeleccionadas : string[];
  txtBoton: string = "Crear Producto";
  esEdicion = false;
  codigoProducto: number = 0;
  alerta!: Alerta;

  constructor(private route: ActivatedRoute, private productoService:ProductoService, private imagenService: ImagenService, private categoriaService: CategoriaService, private tokenService: TokenService) {
    this.categorias = [];
    this.producto = new ProductoDTO();
    this.categoriaSeleccionadas = [];
    this.cargarCategorias();
    this.route.params.subscribe(params => {
      this.codigoProducto = <number>params["codigo"];
      this.obtenerProducto(this.codigoProducto);
      // if (this.producto   != null) {
        
      // }
    });
  }
  public crearProducto() {
    const objeto = this;

    this.producto.categorias = this.categoriaSeleccionadas;
    this.producto.codigoVendedor = this.tokenService.getUserId();

    if (this.producto.imagenes.length > 0) {
      this.productoService.crear(this.producto).subscribe({
        next: data => {
          this.alerta = new Alerta(data.respuesta,"succes");
        },
        error: error => {
          this.alerta = new Alerta(error.error.respuesta,"danger");
        }
      });
    } else {
      this.alerta = new Alerta("Debe seleccionar al menos una imagen y subirla","danger");
     
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }

  }
  private cargarCategorias() {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.errror,"danger");
      }
    });
  }

  checkSeleccionado(categoriaSelected: any, checked: Event) {

    const checkbox = checked.target as HTMLInputElement;
    const checkboxValue = checkbox.checked;

    if (checkboxValue) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSeleccionadas.push(categoriaSelected);
    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.categoriaSeleccionadas.splice(this.categoriaSeleccionadas.indexOf(categoriaSelected), 1);
    }
  }

  // en data.respuesta tiene que ir url al final
  public subirImagenes() {
    if (this.archivos != null && this.archivos.length > 0) {
      const objeto = this.producto;
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          objeto.imagenes.push(data.respuesta.url);
        },
        error: error => {
          this.alerta = new Alerta(error.error,"danger");
        }
      });
    } else {
      this.alerta = new Alerta("Debe seleccionar al menos una imagen y subirla","danger");
    }
  }

  public obtenerProducto(cod: number){

    this.productoService.obtener(cod).subscribe({
      next: data => {
        this.producto = data.respuesta;
        this.categoriaSeleccionadas = this.producto.categorias;
        this.esEdicion = true;
      },
      error: error  => {
        this.alerta = new Alerta(error.error,"danger");
      },
    });
  }

  editarProducto() {
    if (this.producto.imagenes.length > 0) {
      this.productoService.editar(this.producto,this.codigoProducto).subscribe({
        next: data => {
          this.alerta = new Alerta("Se actualizó correctamente","succes");
        },
        error: error => {
          this.alerta = new Alerta(error.error,"danger");
        }
      });
    } else {

      this.alerta = new Alerta("Debe seleccionar al menos una imagen y subirla","danger");
    }

  }

}
