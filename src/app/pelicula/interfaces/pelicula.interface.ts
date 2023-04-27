export interface Pelicula{
  id:number,
  nombre:string,
  tipo:TipoPelicula,
  fechaEstreno:Date,
  cantidadPublico:number,
  urlImagen:string
}

enum TipoPelicula{
  Terror,
  Comedia,
  Amor,
  Otros
}
