import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from '../peliculas.component';
import { PeliculaAltaComponent } from '../components/pelicula/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from '../components/pelicula/pelicula-listado/pelicula-listado.component';
import { PeliculaDetalleComponent } from '../components/pelicula/pelicula-detalle/pelicula-detalle.component';


const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'alta', component: PeliculaAltaComponent },
  { path: 'listado', component: PeliculaListadoComponent },
  { path: ':id', component: PeliculaDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
