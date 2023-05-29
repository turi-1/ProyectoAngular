import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeradorDTO } from '../modelo/moderador-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ModeradorService {

  private moderadorUrl = "http://localhost:8080/api/moderador";

  constructor(private http: HttpClient) { }

  public registrarAccion(moderadorDTO: ModeradorDTO) {

    return this.http.post<MensajeDTO>(`${this.moderadorUrl}/registro`, moderadorDTO);

  }
}
