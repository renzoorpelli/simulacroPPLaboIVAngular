import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './utils/busqueda/busqueda.component';

const routes: Routes = [
  {path: 'busqueda', component: BusquedaComponent},
  { path: 'pelicula', loadChildren: () => import('./pelicula/peliculas.module').then(m => m.PeliculasModule) },
  { path: 'actor', loadChildren: () => import('./actor/actor.module').then(m => m.ActorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
