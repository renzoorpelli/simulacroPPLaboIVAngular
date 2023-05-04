import { Injectable } from '@angular/core';
import { Repository } from 'src/app/data/repository/repository.interface';
import { Actor } from '../class/actor';
import { Observable, Subscription } from 'rxjs';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorRepositoryService implements Repository<Actor>{
  listadoActores: CollectionReference<DocumentData>;
  listadoActores$:Observable<Actor[]>;

  constructor(private _firestore: Firestore){
    this.listadoActores = collection(this._firestore, 'actores');
    this.listadoActores$ = collectionData(this.listadoActores) as Observable<Actor[]>;
  }

  getAll(): Observable<Actor[]> {
    return this.listadoActores$;
  }

  getById(id: number): Observable<Actor> {
    throw new Error('Method not implemented.');
  }

  create(entity: Actor): boolean{
    if(this.listadoActores){
      // obtengo referencia al id del doucmento para asignarlo a un campo del actor.
      let docRef = doc(this.listadoActores);

      const newItem: any = {
        ...entity,
        idActor: docRef.id
      };

      setDoc(docRef, newItem)
      return true;
    }
    return false;
  }
  update(id: number): Observable<Actor> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<Actor> {
    throw new Error('Method not implemented.');
  }
}
