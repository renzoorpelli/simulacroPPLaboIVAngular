import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent {

  @Input() parentEntidad!:Pelicula;
}
