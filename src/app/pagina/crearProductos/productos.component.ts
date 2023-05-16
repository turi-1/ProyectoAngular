import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  producto:ProductoDTO;
  archivos!:FileList;
  categorias:string;
  txtBoton: string = "";
  productoService: any;
  

  constructor(private route:ActivatedRoute, private imagenService: ImagenService, private categoriaService: CategoriaService){
    this.categorias = "";
    this.producto= new ProductoDTO;
    this.txtBoton ="";
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
      next: data => {
        this.categorias = data.respuesta;
      },
      error: error => {
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
        next: data => {
        objeto.imagen.push( data.respuesta);
        },
        error: error => {
        console.log(error.error);
        }
        });
        } else {
        console.log('Debe seleccionar al menos una imagen y subirla');
        }
        }
        
}
