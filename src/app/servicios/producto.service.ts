import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { ProductoDTO } from '../modelo/producto-dto';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productoUrl = "http://localhost:8080/api/productos";


  productos: ProductoGetDTO[];

  constructor(private http: HttpClient) {
    this.productos = [];
    // this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 4.352, 4, ["https://picsum.photos/454/223"], ["DEPORTE"]));
    // this.productos.push(new ProductoGetDTO(3, "Relojes", "Descripcion 3", 235.235, 4, ["https://picsum.photos/453/224"], ["RELOJERIA"]));
    // this.productos.push(new ProductoGetDTO(4, "Televisor", "Descripcion 4", 56.756, 4, ["https://picsum.photos/450/225"], ["CADENAS"]));
    // this.productos.push(new ProductoGetDTO(5, "Celulares", "Descripcion 5", 464.353, 4, ["https://picsum.photos/451/226"], ["CELULARES"]));
    // this.productos.push(new ProductoGetDTO(6, "Parlantes", "Descripcion 6", 5.756, 4, ["https://picsum.photos/457/227"], ["SONIDO"]));
    // this.productos.push(new ProductoGetDTO(7, "Joyas", "Descripcion 7", 23.523, 4, ["https://picsum.photos/458/228"], ["JOYERIA"]));
    // this.productos.push(new ProductoGetDTO(8, "Cadenas", "Descripcion 8", 4.664, 4, ["https://picsum.photos/459/229"], ["CADENAS"]));
    // this.productos.push(new ProductoGetDTO(9, "Hogar", "Descripcion 9", 8.646, 5, ["https://picsum.photos/456/222"], ["HOGAR"]));
  }
  public listar(codigoVendedor: number) {

    return this.http.get<MensajeDTO>(`${this.productoUrl}/usuario/${codigoVendedor}`);

  }

  public listarAll(){

    return  this.http.get<MensajeDTO>(`${this.productoUrl}/listar/listar`);
  }

  public obtener(cod: number){
    
    return this.http.get<MensajeDTO>(`${this.productoUrl}/${cod}`);
  }

  public crear(producto: ProductoDTO): Observable<MensajeDTO> {

    return this.http.post<MensajeDTO>(`${this.productoUrl}/registro`, producto);

  }

  public editar(producto: ProductoDTO,codigo : number): Observable<MensajeDTO> {

    return this.http.put<MensajeDTO>(`${this.productoUrl}/${codigo}`, producto);

  }

  public eliminar(codigoVendedor: number) {

    return this.http.delete<MensajeDTO>(`${this.productoUrl}/${codigoVendedor}`);

  }

  public ponerFavorito(codigoUsuario : number, codigoProducto : number){


    return  this.http.get<MensajeDTO>(`${this.productoUrl}/guardarFavorito/${codigoUsuario}/${codigoProducto}`);
  }

  public listarFavoritos(codigoUsuario : number) {

    return this.http.get<MensajeDTO>(`${this.productoUrl}/favoritos/${codigoUsuario}`);
  }

  public eliminarFavorito(codigoProducto: number,codigoUsuario: number){
    
    return this.http.delete<MensajeDTO>(`${this.productoUrl}/eliminarFavorito/${codigoProducto}/${codigoUsuario}`);
  }
}
