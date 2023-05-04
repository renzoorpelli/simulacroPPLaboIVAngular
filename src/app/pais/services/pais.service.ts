import { Injectable } from '@angular/core';
import { map}  from 'rxjs/operators';
import { Observable, Subject, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Pais, RootObject } from '../class/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _paises$: Observable<Pais[]>;

  // Subject encargado de emitir el evento, cada vez que se seleccione un elemento de la tabla
  private idPaisSeleccionado:Subject<Number> = new Subject<Number>();

  elementSelected$ = this.idPaisSeleccionado.asObservable();

  get paises(): Observable<Pais[]>{
    return this._paises$;
  }


  constructor(private http: HttpClient) {
    this._paises$ = this.http.get<RootObject[]>('https://restcountries.com/v2/all')
    .pipe(
      map((paises:RootObject[]) =>
          paises.map((pais, index) => new Pais(index + 1, pais.name, pais.flags.png, pais.population))));
  }


  //metodo encargado de obtener la referencia al pais selecconado de la tabla y asignarla a un atributo del servicio para que
  // pueda ser utilizada en
  obtenerPaisSeleccionadoTabla(paisSeleccionadoTabla:Pais){
    // metodo next emite el valor a todos los subscriptores del Observable
    this.idPaisSeleccionado?.next(paisSeleccionadoTabla.id);
  }

}
