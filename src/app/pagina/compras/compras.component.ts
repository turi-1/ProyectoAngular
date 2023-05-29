import { Component } from '@angular/core';
import { Compra } from 'src/app/modelo/compra';
import { CompraGet } from 'src/app/modelo/compra-get';
import { DetalleResumidoDTO } from 'src/app/modelo/detalle-resumido-dto';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { TokenService } from '../../servicios/token.service';
import { CompraService } from 'src/app/servicios/compra.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {

   //productos: ProductoGetDTO[];

  transacciones: CompraGet[];
  seleccionados: CompraGet[];
  detalleTransacciones: DetalleResumidoDTO[];
  textoBtnEliminar: string;
  alerta !: Alerta;

  constructor(private transaccionServicio: CompraService, private tokenService : TokenService) {
    console.log("Eyyy");
    this.transacciones = [];
    this.seleccionados = [];
    this.detalleTransacciones = [];
    this.textoBtnEliminar = "";
  }
  ngOnInit(): void {
   this.listar();
  }

  seleccionar(TransaccionDTO: CompraGet, estado: boolean) {

    if (estado) {
      this.seleccionados.push(TransaccionDTO);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != TransaccionDTO);
    }
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

  public borrarTransaccion() {
    this.seleccionados.forEach(e => {
      this.transacciones = this.transacciones.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
  }

  public abrirDetalle(codigo: number = 0){

    console.log("Mera socio");

    console.log(this.detalleTransacciones);

    
    let trasaccion;
    trasaccion = this.transacciones.find(transaccion => transaccion.codigo == codigo);
    this.detalleTransacciones = trasaccion ? trasaccion.detalleTransaccionDTO : [];
  }

  public listar(){

    let codigoVendedor = this.tokenService.getUserId();

    this.transaccionServicio.obtenerCompras(codigoVendedor).subscribe({
      next: data => {
        this.transacciones = data.respuesta;
      },
      error: error => {
        this.alerta = new Alerta(error.error,"danger");
      }
    });
  }
}
