import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActorRoutingModule } from '../routing/actor-routing.module';
import { ActorComponent } from '../actor.component';
import { ActorListadoComponent } from '../components/actor-listado/actor-listado.component';
import { ActorAltaComponent } from '../components/actor-alta/actor-alta.component';
import { ActorService } from '../services/actor.service';
import { FormModule } from '../../common/form/form.module';
import { PaisModule } from '../../pais/module/pais.module';
import { ActorRepositoryService } from '../services/actor-repository.service';


@NgModule({
  declarations: [
    ActorComponent,
    ActorListadoComponent,
    ActorAltaComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    ReactiveFormsModule,
    FormModule,
    PaisModule
  ],
  providers:[
    ActorService,
    ActorRepositoryService
  ]
})
export class ActorModule { }
