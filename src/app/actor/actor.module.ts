import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { ActorListadoComponent } from './actor/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './actor/actor-alta/actor-alta.component';


@NgModule({
  declarations: [
    ActorComponent,
    ActorListadoComponent,
    ActorAltaComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule
  ]
})
export class ActorModule { }
