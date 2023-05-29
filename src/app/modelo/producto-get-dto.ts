export class ProductoGetDTO {

    codigo: number = 0;
    codigoVendedor : number = 0;
    nombre: string = "";
    descripcion: string = "";
    precio: number = 0;
    unidades: number = 0;
    imagenes: string[] = [];
    categorias: string[] = [];
    estado : string = "";
    filtro: string[] = [];
    seleccionados:string[] = [];

    // constructor(codigo: number, codigoVendedor: number, nombre: string, descripcion: string, precio: number, unidades: number, imagen: string[], categorias: string[]) {
    //         this.codigo = codigo;
    //         this.codigoVendedor = codigoVendedor;
    //         this.nombre = nombre;
    //         this.descripcion = descripcion;
    //         this.precio = precio;
    //         this.unidades = unidades;
    //         this.imagenes = imagen;
    //         this.categorias = categorias;
    // }
}
