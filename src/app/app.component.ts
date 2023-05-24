import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title: String = 'Unimarket';
  login: boolean = true;

  constructor(private loginPrd: AuthService) {
    console.log(this.login);
  }

  public visualizarMenu() {
    this.login = this.loginPrd.habilitarlogeo();
  }
}
