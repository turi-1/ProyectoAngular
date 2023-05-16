import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 tokenService : any;
 authService : any;
  alerta!: Alerta;
  loginUser: any;

  public login(){
    const objeto = this;
    this.authService.login(this.loginUser).subscribe({
    next: (data: { respuesta: { token: any; }; }) => {
    objeto.tokenService.login(data.respuesta.token);
    },
    error: (error: { error: { respuesta: string; }; }) => {
    objeto.alerta = new Alerta(error.error.respuesta, "danger");
    }
    });
}
}