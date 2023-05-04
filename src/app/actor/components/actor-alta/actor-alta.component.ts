import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';


import { PaisService } from 'src/app/pais/services/pais.service';
import { ActorService } from '../../services/actor.service';
import { Subscription } from 'rxjs';
import { ActorRepositoryService } from '../../services/actor-repository.service';
import { Actor } from '../../class/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit, OnDestroy{
  actorForm!:FormGroup;

  private _subscription: Subscription;


  ngOnInit(): void {
    this.createForm();
    this._subscription = this._paisService.elementSelected$?.subscribe((elementId) => this.actorForm.get("idPais")?.setValue(elementId))
  }

  //
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  constructor(private _paisService:PaisService, private _actorRepository:ActorRepositoryService){
  }


  // metodo que crea el formulario
  createForm(){
    this.actorForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      idPais: new FormControl('1', Validators.required)
    })
  }



  // TODO una vez cargado y valdiado los datos, va a llegar aca, con el servicio subimos a firebase
  onSubmit($event:Actor){
    const actor = new Actor($event.nombre, $event.edad, $event.idPais);
    this._actorRepository.create(actor);
  }


}
