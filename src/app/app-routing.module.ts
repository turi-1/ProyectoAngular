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

const routes: Routes = [
{path: "", component: InicioComponent},
{path: "login", component: LoginComponent},
{path: "registro", component: RegistroComponent},
{path: "productos", component: ProductosComponent},
{path: "busqueda/:texto", component: BusquedaComponent },
{path: "busqueda/:codigo", component: BusquedaComponent },
{path: "ver-detalle/:codigo", component: VerDetalleComponent },
{path: "detalle-producto/:codigo", component: DetalleProductoComponent},
{path: "gestion-productos", component: GestionProductosComponent},
{path: "editar-producto/:codigo", component: ProductosComponent },
{path: "carrito", component: CarritoComponent},
{path: "admin", component: AdminComponent},
{path: "compras", component: ComprasComponent},
{path: "chat", component: ChatComponent},
{path: "inicio", component: InicioGeneralComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
