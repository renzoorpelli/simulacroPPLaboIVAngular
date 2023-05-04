import { Pais } from "src/app/pais/class/pais";
import { Pelicula } from "src/app/pelicula/class/pelicula";

export class Actor {
  idActor?:string;
  nombre: string;
  edad:number;
  idPais: string;
  pais?:Pais;
  peliculas?: Pelicula[];
  constructor(nombre: string, edad: number,idPais: string, idActor?:string) {
    this.nombre = nombre;
    this.edad = edad;
    this.idPais = idPais;
    if(this.idActor != null){
      this.idActor = idActor;
    }
  }
}
