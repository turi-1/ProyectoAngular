import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoGetDTO[];

  constructor() {
    this.productos = [];
    this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 4.352, 4, ["https://picsum.photos/454/223"], ["DEPORTE"]));
    this.productos.push(new ProductoGetDTO(3, "Relojes", "Descripcion 3", 235.235, 4, ["https://picsum.photos/453/224"], ["RELOJERIA"]));
    this.productos.push(new ProductoGetDTO(4, "Televisor", "Descripcion 4", 56.756, 4, ["https://picsum.photos/450/225"], ["CADENAS"]));
    this.productos.push(new ProductoGetDTO(5, "Celulares", "Descripcion 5", 464.353, 4, ["https://picsum.photos/451/226"], ["CELULARES"]));
    this.productos.push(new ProductoGetDTO(6, "Parlantes", "Descripcion 6", 5.756, 4, ["https://picsum.photos/457/227"], ["SONIDO"]));
    this.productos.push(new ProductoGetDTO(7, "Joyas", "Descripcion 7", 23.523, 4, ["https://picsum.photos/458/228"], ["JOYERIA"]));
    this.productos.push(new ProductoGetDTO(8, "Cadenas", "Descripcion 8", 4.664, 4, ["https://picsum.photos/459/229"], ["CADENAS"]));
    this.productos.push(new ProductoGetDTO(9, "Hogar", "Descripcion 9", 8.646, 5, ["https://picsum.photos/456/222"], ["HOGAR"]));
  }
  public listar(): ProductoGetDTO[] {
    return this.productos;
  }
  public obtener(cod: number): ProductoGetDTO | undefined {
    return this.productos.find(item => item.codigo == cod);
  }
}
