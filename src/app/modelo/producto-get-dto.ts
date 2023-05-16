export class ProductoGetDTO {

    codigo: number = 0;
    nombre: string = "";
    descripcion: string = "";
    precio: number = 0;
    unidades: number = 0;
    imagen: string[] = [];
    categorias: string[] = [];
    productos: string[] = [];
    filtro: string[] = [];
    seleccionados:string[] = [];

    constructor(codigo: number, nombre: string, descripcion: string, precio: number, unidades: number, imagen: string[], categorias: string[]) {
            this.codigo = codigo;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
            this.unidades = unidades;
            this.imagen = imagen;
            this.categorias = categorias;
    }
}
