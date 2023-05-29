import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { ProductosComponent } from './pagina/crearProductos/productos.component';
import { AdminComponent } from './pagina/admin/admin.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { ComprasComponent } from './pagina/compras/compras.component';
import { VerDetalleComponent } from './pagina/ver-detalle/ver-detalle.component';
import { ChatComponent } from './pagina/chat/chat.component';
import { InicioGeneralComponent } from './pagina/inicio-general/inicio-general.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';
import { LoginGuard } from './guards/permiso.service';
import { RevisarProductosComponentComponent } from './pagina/revisar-productos-component/revisar-productos-component.component';
import { RolesGuard } from './guards/roles.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent, canActivate : [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate : [LoginGuard] },
  { path: 'productos', component: ProductosComponent,canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  { path: 'busqueda/:texto', component: BusquedaComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  { path: 'busqueda/:codigo', component: BusquedaComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  { path: 'ver-detalle/:codigo', component: VerDetalleComponent },
  { path: 'detalle-producto/:codigo', component: DetalleProductoComponent },
  { path: 'gestion-productos', component: GestionProductosComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] },  },
  { path: 'editar-producto/:codigo', component: ProductosComponent,canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] }  },
  { path: 'revisar-productos', component: RevisarProductosComponentComponent, canActivate: [RolesGuard], data : {
    expectedRole: ["MODERADOR"]
  }},
  { path: 'carrito', component: CarritoComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  { path: 'admin', component: AdminComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  { path: 'compras', component: ComprasComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  { path: 'chat', component: ChatComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  { path: 'favoritos', component: FavoritosComponent , canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
  //{path: "inicio", component: InicioGeneralComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
