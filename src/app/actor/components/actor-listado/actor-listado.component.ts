import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActorRepositoryService } from '../../services/actor-repository.service';
import { Subscription } from 'rxjs';
import { Actor } from '../../class/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit,OnDestroy{

  // subscripcion que refiere al metodo getAll del repositorio para obtener todos los cambios del mismo
  subscription: Subscription;
  listadoActores:Actor[];

  // al momento de crear el componente, me subscribo
  ngOnInit(): void {
    this.subscribe()
  }
  // al momento de fin de ciclo de vida del componente, cierro la subscripcion
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  constructor(private _actorRepository: ActorRepositoryService){
      this.listadoActores = []
  }

  // metodo encargado de realizar la subscripcion verificando si este es nulo,
  // si es nulo realiza la sub, en caso de no serlo significa que ya esta subscripto
  subscribe(){
    if(!this.subscription){
      this.subscription = this._actorRepository.listadoActores$.subscribe((data) => {
          this.listadoActores = data;
      })
    }
  }

    // metodo encargado de realizar la desubscripcion verificando si este no es nulo.
  unsubscribe(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
