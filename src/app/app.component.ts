import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';
import { TokenService } from './servicios/token.service';
import { SesionService } from './servicios/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //title: String = 'Unimarket';

  title = 'Unimarket';
  isLogged = false;
  email: string = "";

  constructor(private loginPrd: AuthService, private tokenService: TokenService, private sesionService: SesionService,private router: Router) {
    console.log(this.isLogged);
  }

  
  public logout() {
    this.tokenService.logout();
  }
  ngOnInit(): void {
    const objeto = this;
    this.sesionService.currentMessage.subscribe({
      next: data => {
        objeto.actualizarSesion(data);
      }
    });
    this.actualizarSesion(this.tokenService.isLogged());
  }

  private actualizarSesion(estado: boolean) {
    this.isLogged = estado;
    if (estado) {
      this.email = this.tokenService.getEmail();
    } else {

      this.email = "";
    }
  }

  public visualizarMenu() {
    this.isLogged = this.loginPrd.habilitarlogeo();
  }

  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["/busqueda", valor]);
    }
  }
}
