import { DetalleResumidoDTO } from "./detalle-resumido-dto";

export class CompraGet {

    codigo : number = 0;
    fecha : string = "";
    valorTotal : number = 0;
    codigoUsuario : number = 0;
    metodoPago : string = "";
    detalleTransaccionDTO : DetalleResumidoDTO[] = [];
}
