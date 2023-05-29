import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: number[];
  
  constructor() {
    this.carrito = [];
  }
  public agregar(codigo: number) {
    this.carrito.push(codigo);
  }
  public quitar(codigo: number) {
    let indice = this.carrito.indexOf(codigo);
    this.carrito.splice(indice, 1);
  }

  public vaciarCarrito(){
    
    this.carrito = [];
  }

  public listar(): number[] {
    return this.carrito;
  }
}

