import { Component } from '@angular/core';
import { ValoracionService } from '../../servicios/valoracion.service';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent {

  valoracion: number = 0;

  constructor(private valoracionService: ValoracionService){

  }

  public setValoracion(valor: number){

    this.valoracionService.setValoracion(valor);
  }

  public getValoracion(){
    this.valoracionService.obtenerValoracion();
  }

}
