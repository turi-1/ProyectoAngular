import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { ProductosComponent } from './pagina/crearProductos/productos.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';

const routes: Routes = [
{path: "", component: InicioComponent},
{path: "login", component: LoginComponent},
{path: "registro", component: RegistroComponent},
{path: "productos", component: ProductosComponent},
{path: "editar-producto/:codigo", component: ProductosComponent },
{path: "busqueda/:texto", component: BusquedaComponent },
{path: "detalle-producto", component: DetalleProductoComponent},
{path: "gestion-productos", component: GestionProductosComponent},
{path: "carrito", component: CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
