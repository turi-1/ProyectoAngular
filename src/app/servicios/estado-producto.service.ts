import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class EstadoProductoService {

  private catURL = "http://localhost:8080/api/estados";
  constructor(private http: HttpClient) { }
  public listar(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.catURL}/listar`);
  }

  public listarPorEstados(estado : string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.catURL}/listarEstado/${estado}`);
  }
}
