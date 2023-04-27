import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-grilla-pelicula',
  templateUrl: './grilla-pelicula.component.html',
  styleUrls: ['./grilla-pelicula.component.css']
})
export class GrillaPeliculaComponent {
  @Input('listadoPeliculas') public peliculas:Pelicula[];

  constructor() {
    this.peliculas = [];
  }
}
