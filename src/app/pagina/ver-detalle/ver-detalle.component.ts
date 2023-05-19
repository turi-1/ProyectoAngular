import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent {

  producto:ProductoDTO;
  archivos!:FileList;
  categorias:string;
  productoService: any;
  txtBoton: string = "Crear Producto";
  esEdicion = false;
  codigoProducto: number = 0;
  filtro: ProductoGetDTO[];
  codigo: number =0;

  constructor(private route:ActivatedRoute, private imagenService: ImagenService, private categoriaService: CategoriaService, private carritoService: CarritoService){
    this.categorias = "";
    this.filtro = [];
    this.producto= new ProductoDTO();
    this.productoService = new ProductoService();
    this.route.params.subscribe(params => {
      this.codigoProducto = <number>params["codigo"];
      let objetoProducto = this.productoService.obtener(this.codigoProducto);
      if (objetoProducto != null) {
        this.producto = objetoProducto;
        console.log(this.producto);
        this.esEdicion = true;
      }
    });
  }
  public crearProducto() {
    if(this.producto.imagen.length > 0) {
    this.productoService.crear(this.producto).subscribe({
    next: (data: { respuesta: any; }) => {
    console.log(data.respuesta);
  },
  error: (error: { error: any; }) => {
  console.log(error.error);
  }
  });
  } else {
  console.log('Debe seleccionar al menos una imagen y subirla');
  }
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
    const files = event.target.files;
    console.log(files);
    }
    
    }
    private cargarCategorias(){
      this.categoriaService.listar().subscribe({
      next: (data: { respuesta: string; }) => {
        this.categorias = data.respuesta;
      },
      error: (error: { error: any; }) => {
      console.log(error.error);
      }
      });
      }
      
      // en data.respuesta tiene que ir url al final
      public subirImagenes() {
        if (this.archivos != null && this.archivos.length > 0) {
        const objeto = this.producto;
        const formData = new FormData();
        formData.append('file', this.archivos[0]);
        this.imagenService.subir(formData).subscribe({
        next: (data: { respuesta: string; }) => {
        objeto.imagen.push( data.respuesta);
        },
        error: (error: { error: any; }) => {
        console.log(error.error);
        }
        });
        } else {
        console.log('Debe seleccionar al menos una imagen y subirla');
        }
        }
        public agregarCarrito(){
          this.carritoService.agregar(this.codigoProducto);
          }
      
      
        
}