import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { Compra } from 'src/app/modelo/compra';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { DetalleResumidoDTO } from 'src/app/modelo/detalle-resumido-dto';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ValoracionDTO } from 'src/app/modelo/valoracion-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { CompraService } from 'src/app/servicios/compra.service';
import { MetodosPagosService } from 'src/app/servicios/metodos-pagos.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { ValoracionService } from 'src/app/servicios/valoracion.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  productos: DetalleCompraDTO[];
  gestionProductos: ProductoGetDTO[];
  metodosPagos :string[];
  valorTotal: number;
  textoBtnEliminar: string = "";
  seleccionados: ProductoGetDTO[];

  productosDetalle: DetalleResumidoDTO[] = [];

  transaccion: Compra;
  alerta!: Alerta;
  alerta2!: Alerta;

  metodoSeleccionado: number = 0;

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

    constructor(private carritoService: CarritoService, private productoService: ProductoService, private metodoPagoServicie: MetodosPagosService,private valoracionService: ValoracionService, private tokenService: TokenService, private compraService: CompraService) {
    this.seleccionados = [];
    this.productos = [];
    this.gestionProductos = [];
    this.valorTotal = 0;
    this.textoBtnEliminar = "";
    this.metodosPagos = [];
    this.transaccion = new Compra();

    const listaCodigos = this.carritoService.listar();
    this.obtenerMetodosPagos();
    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        const producto =  this.obtenerProducto(cod).then(result => {
          this.productos.push(new DetalleCompraDTO(result,1));
          this.valorTotal += result.precio;
        });
        // if (producto != null) {
        //   this.productos.push(new DetalleCompraDTO(producto, 1));
        //   this.valorTotal += producto.precio;
        // }
      }
    }
  }
  public seleccionar(gestionProductos: ProductoGetDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(gestionProductos);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != gestionProductos);
    }
    this.actualizarMensaje();

  }
  private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }
  public borrarProductos() {
    this.seleccionados.forEach(e => {
      this.gestionProductos = this.gestionProductos.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
  }

  private obtenerMetodosPagos() {
    this.metodoPagoServicie.listar().subscribe({
      next: data => {
        this.metodosPagos = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.errror,"danger");
      }
    });
  }


  public realizarCompra(){

    this.alerta = new Alerta("","");

    if(this.metodoSeleccionado == 0){
      this.alerta = new Alerta("Por favor seleccione un metodo de pago","danger");
      return;
    }

    this.transaccion.codigoUsuario =   this.tokenService.getUserId();

    let valoracion = this.valoracionService.obtenerValoracion();
    if(valoracion == 0){
      this.alerta = new Alerta("Por favor realice una valoracion","danger");
      return;
    }

    this.productos.forEach(item => {
      this.valorTotal += (item.productos.precio * item.unidades);
      this.productosDetalle.push( new DetalleResumidoDTO(item.productos.codigo,item.productos.precio, item.unidades));

      let valoracion = new ValoracionDTO();
      valoracion.puntuacion = this.valoracionService.obtenerValoracion();
      valoracion.codigoEvaluado = item.productos.codigoVendedor;
      valoracion.codigoValorado = this.transaccion.codigoUsuario;
    
      this.valoracionService.ponerValoracion(valoracion);
    });

    this.transaccion.detalleCompra = this.productosDetalle;
    this.transaccion.metodoPago = this.metodoSeleccionado;
    this.transaccion.valorTotal = this.valorTotal;

    this.ejecutarCompra();

  }

  public ejecutarCompra(){

    this.compraService.crear(this.transaccion).subscribe({
      next: data => {
        this.alerta = new Alerta(data.respuesta,"succes");
      },
      error: error => {
        this.alerta = new Alerta(error.error.respuesta,"danger");
      }
    });
  }

  public actualizarValor(){

    this.valorTotal = 0;
    console.log("Eyy");
    this.productos.forEach(item => {

      this.valorTotal += item.productos.precio * item.unidades;

    })
  }

  // async obtenerProd(codigo : number){

  //   return  await this.obtenerProducto(codigo);
  // }

  // public obtenerProducto(cod: number) {

  //   this.productoService.obtener(cod).subscribe({
  //     next: data => {
  //       this.producto = data.respuesta;
  //       this.categoriaSeleccionadas = this.producto.categorias;
  //       this.esEdicion = true;
  //     },
  //     error: error => {
  //       this.alerta = new Alerta(error.error, "danger");
  //     },
  //   });
  // }
}