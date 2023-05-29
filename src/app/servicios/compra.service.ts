import { Injectable } from '@angular/core';
import { Compra } from '../modelo/compra';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private compraURL = "http://localhost:8080/api/transaccion";

  constructor(private http: HttpClient){

  }



  public crear(compra: Compra): Observable<MensajeDTO> {

    return this.http.post<MensajeDTO>(`${this.compraURL}/registro`, compra);

  }


  public obtenerCompras(codigoUsuario : number){

    return this.http.get<MensajeDTO>(`${this.compraURL}/lista/${codigoUsuario}`);
  }

}
