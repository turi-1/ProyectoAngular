import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-ingresado',
  templateUrl: './usuario-ingresado.component.html',
  styleUrls: ['./usuario-ingresado.component.css']
})
export class UsuarioIngresadoComponent {

  title = 'Unimarket';

  constructor(private router: Router) {

  }

  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["/busqueda", valor]);
    }
  }
}
