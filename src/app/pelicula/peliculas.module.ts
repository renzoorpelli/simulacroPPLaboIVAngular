import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { PeliculaAltaComponent } from './pelicula/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './utils/tabla-pelicula/tabla-pelicula.component';
import { PeliculaDetalleComponent } from './pelicula/pelicula-detalle/pelicula-detalle.component';
import { GrillaPeliculaComponent } from './utils/grilla-pelicula/grilla-pelicula.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    PeliculaDetalleComponent,
    GrillaPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ],
  exports: [
    PeliculaListadoComponent,
    PeliculaDetalleComponent
  ]
})
export class PeliculasModule { }
