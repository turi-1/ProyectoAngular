import { ProductoGetDTO } from "./producto-get-dto";

export class DetalleCompraDTO {

    productos: ProductoGetDTO;
    unidades:number= 0;

    constructor(productos:ProductoGetDTO,unidades:number){
        this.productos = productos;
        this.unidades = unidades;
    }
}
