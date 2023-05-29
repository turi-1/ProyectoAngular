import { DetalleResumidoDTO } from "./detalle-resumido-dto";

export class Compra {
    
    codigoUsuario: number = 0;
    valorTotal: number = 0;
    metodoPago: number = 0;
    detalleCompra: DetalleResumidoDTO[] = [];
}