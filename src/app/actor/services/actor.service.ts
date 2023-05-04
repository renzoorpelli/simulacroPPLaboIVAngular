import { Injectable } from '@angular/core';
import { Actor } from '../class/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private _actores:Actor[];
  get actores():Actor[]{

    return [...this._actores];
  }
  constructor() {
      this._actores = []
   }
}
