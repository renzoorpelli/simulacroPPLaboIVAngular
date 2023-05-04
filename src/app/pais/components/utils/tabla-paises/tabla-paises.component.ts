import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Pais } from 'src/app/pais/class/pais';
import { PaisService } from 'src/app/pais/services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {

  // en el template utilizamos el pipe ASYNC que manejara el lifeCycle de la subscription
  public paises$:Observable<Pais[]>;

  public keys:string[];

  constructor(private _paisService:PaisService) {

    // TODO UTILIZAR LA API DE REST COUNTRIES
    this.paises$ = _paisService.paises;
  }
  //metodo encargado de obtener el elemento que es clickeado de la tabla
  // y lanzar el evento al componente busqueda quien se lo pasara al componente detalle
  onRowClick(item:Pais){
    this._paisService.obtenerPaisSeleccionadoTabla(item);
  }
}
