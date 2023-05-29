import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComentarioDto } from '../modelo/comentario-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url:String = "http://localhost:8080/api/comentarios"
  //private url:String = "https://proyecto-uni-production.up.railway.app/api/comentarios";
  constructor(private http: HttpClient) { }


  public crearComentario(comentario:ComentarioDto){
    return this.http.post<MensajeDTO>(`${this.url}/crear`,comentario);
  }

  public obtenerComentarios(codigoProducto:number){
    return this.http.get<MensajeDTO>(`${this.url}/listar/${codigoProducto}`);
  }
}