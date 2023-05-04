export class Pelicula {
  id:number;
  nombre:string;
  tipo:TipoPelicula;
  fechaEstreno:Date;
  cantidadPublico:number;
  urlImagen:string;

  constructor(id:number, nombre: string, tipo:TipoPelicula, fechaEstreno:Date,cantidadPublico: number,urlImagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.fechaEstreno = fechaEstreno;
    this.urlImagen = urlImagen;
    this.cantidadPublico = cantidadPublico;
  }
}

enum TipoPelicula{
  Terror,
  Comedia,
  Amor,
  Otros
}
