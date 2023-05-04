import { Component } from '@angular/core';
import { Pelicula } from 'src/app/pelicula/interfaces/pelicula.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  // Entidad seleccionada de la tabla
  public entityFromEvent!:Pelicula;

  // Metodo encargado de manejar el evento que emite Listado Entidad y pasarlo al DetalleComponent en el html
  // Event Origin = pelicula-listado-component
  parentElementEventHandler($event: Pelicula):void{
    this.entityFromEvent = $event;
  }
}
