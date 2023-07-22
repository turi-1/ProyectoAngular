import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

    textoBusqueda: string;
    productos: ProductoGetDTO[];
    filtro: ProductoGetDTO[];

    constructor(private router:Router, private route: ActivatedRoute, private productoServicio: ProductoService) {
        
        this.productos = this.productoServicio.listar();
        this.filtro = [];
        this.router = router;
        this.textoBusqueda = "";
        this.route.params.subscribe(params => {
            this.textoBusqueda = params['texto'];
            this.filtro = this.productos.filter( p => 
                p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()));

        });
    }
    public iraBusqueda(valor:string){
        if(valor){this.router.navigate(["/busqueda", valor]);
    }
    }       
}