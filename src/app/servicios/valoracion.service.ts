import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ValoracionDTO } from '../modelo/valoracion-dto';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  valoracion: number = 0;
  private valoracionURL = 'http://localhost:8080/valoracion';

  constructor(private http: HttpClient) {

   }


   public obtenerValoracion(){
    return this.valoracion;
   }

   public setValoracion (valor: number){
    this.valoracion = valor;
   }

   public ponerValoracion(valoracion: ValoracionDTO){


    return this.http.post<MensajeDTO>(`${this.valoracionURL}/crear`, valoracion);

   }

}
