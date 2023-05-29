export class DetalleResumidoDTO {

    codigoProducto: number = 0;
    precio: number = 0;
    unidades: number = 0;

    constructor(codigoProducto: number, precio: number, unidades: number){
        this.codigoProducto = codigoProducto;
        this.precio = precio;
        this.unidades = unidades;
    }
}
