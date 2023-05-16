import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:ProductoGetDTO[];
  
  constructor(){
  this.productos = [];
  this.productos.push(new ProductoGetDTO(2, "tenis Nike", "Descripcion 2", 4352, 4,["https://picsum.photos/450/225"], ["ROPA", "DEPORTE"]));
  this.productos.push(new ProductoGetDTO(3, "relojes", "Descripcion 3", 235235, 4,["https://picsum.photos/450/225"], ["RELOJERIA"]));
  this.productos.push(new ProductoGetDTO(4, "televisor", "Descripcion 4", 56756, 4,["https://picsum.photos/450/225"], ["TELEVIDORES"]));
  this.productos.push(new ProductoGetDTO(5, "celulares", "Descripcion 5", 464353, 4,["https://picsum.photos/450/225"], ["CELULARES"]));
  this.productos.push(new ProductoGetDTO(6, "parlantes", "Descripcion 6", 5756, 4,["https://picsum.photos/450/225"], ["EQUIPOS DE SONIDO"]));
  this.productos.push(new ProductoGetDTO(7, "joyas", "Descripcion 7", 23523, 4,["https://picsum.photos/450/225"], ["JOYERIA"]));
  this.productos.push(new ProductoGetDTO(8, "cadenas", "Descripcion 8", 4664, 4,["https://picsum.photos/450/225"], ["CADENAS"]));
  }
  public listar():ProductoGetDTO[]{
  return this.productos;
  }
  public obtener(cod:number):ProductoGetDTO | undefined{
    return this.productos.find(item=> item.codigo===cod);
  }
}
