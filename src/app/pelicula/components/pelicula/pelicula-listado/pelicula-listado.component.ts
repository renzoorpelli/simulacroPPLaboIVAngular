import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../../class/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css'],
})
export class PeliculaListadoComponent {

  @Output() onParentParentElement = new EventEmitter<Pelicula>();
  public peliculas: Pelicula[] = [
    {
      id: 1,
      nombre: 'Drama',
      tipo: 1,
      fechaEstreno: new Date(2023,4,10),
      cantidadPublico: 481,
      urlImagen: "https://ep00.epimg.net/elpais/imagenes/2020/02/06/album/1580999639_454991_1581001437_album_normal.jpg"
    },
    {
      id: 2,
      nombre: 'Crime|Drama|Thriller',
      tipo: 3,
      fechaEstreno: new Date(2023,4,10),
      cantidadPublico: 687,
      urlImagen: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/83980.jpg"
    },
    {
      id: 3,
      nombre: 'Action|Animation',
      tipo: 2,
      fechaEstreno: new Date(2023,4,10),
      cantidadPublico: 298,
      urlImagen: 'https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/83980.jpg'
    }
  ];


  parentElementHandler($event: Pelicula):void{
    this.onParentParentElement.emit({...$event});
  }
}
