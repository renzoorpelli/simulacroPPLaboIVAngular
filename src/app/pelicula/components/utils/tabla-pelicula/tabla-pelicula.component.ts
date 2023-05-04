import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../../class/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  @Input('listadoPeliculas') public peliculas:Pelicula[];
  @Output() onParentElement: EventEmitter<Pelicula> = new EventEmitter;


  public keys:string[];

  constructor() {
    this.peliculas = [];
    this.keys = [];
  }

  //metodo encargado de obtener las keys de un objeto para crear el thead dinamicamente
  getObjectKeys():string[]{
    if(this.peliculas.length > 0){
      // obtiene las keys => a cada titulo le pone en mayus la primer letra y concat desde la segunda letra
      return [...Object.keys(this.peliculas[0])].map(x => x.charAt(0).toUpperCase() + x.substring(1));
    }
    return [];
  }

  //metodo encargado de obtener el elemento que es clickeado de la tabla
  // y lanzar el evento al componente busqueda quien se lo pasara al componente detalle
  onRowClick(item:Pelicula){
      this.onParentElement.emit({...item});
  }
}
