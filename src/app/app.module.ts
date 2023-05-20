import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { AdminComponent } from './pagina/admin/admin.component';
import { VentasComponent } from './pagina/ventas/ventas.component';
import { ProductosComponent } from './pagina/crearProductos/productos.component';
import { ChatComponent } from './pagina/chat/chat.component';
import { UsuariosComponent } from './pagina/usuarios/usuarios.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';
import { ComprasComponent } from './pagina/compras/compras.component';
import { ComentariosComponent } from './pagina/comentarios/comentarios.component';
import { TransaccionComponent } from './pagina/transaccion/transaccion.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { VerDetalleComponent } from './pagina/ver-detalle/ver-detalle.component';
import { UsuarioIngresadoComponent } from './pagina/usuario-ingresado/usuario-ingresado.component';
import { InicioGeneralComponent } from './pagina/inicio-general/inicio-general.component';


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
    TransaccionComponent,
    BusquedaComponent,
    DetalleProductoComponent,
    GestionProductosComponent,
    CarritoComponent,
    AlertaComponent,
    VerDetalleComponent,
    UsuarioIngresadoComponent,
    InicioGeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
