import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ActorComponent } from '../actor.component';
import { ActorAltaComponent } from '../components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from '../components/actor-listado/actor-listado.component';


const routes: Routes = [
  { path: 'actor', component: ActorComponent },
  { path: 'actor/alta', component: ActorAltaComponent},
  { path: 'actor/listado', component: ActorListadoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
