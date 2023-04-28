import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { AdminComponent } from './pagina/admin/admin.component';
import { VentasComponent } from './pagina/ventas/ventas.component';
import { ProductosComponent } from './pagina/productos/productos.component';
import { ChatComponent } from './pagina/chat/chat.component';
import { UsuariosComponent } from './pagina/usuarios/usuarios.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';
import { ComprasComponent } from './pagina/compras/compras.component';
import { ComentariosComponent } from './pagina/comentarios/comentarios.component';
import { TransaccionComponent } from './pagina/transaccion/transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    AdminComponent,
    VentasComponent,
    ProductosComponent,
    ChatComponent,
    UsuariosComponent,
    FavoritosComponent,
    ComprasComponent,
    ComentariosComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
