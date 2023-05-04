import { Observable } from "rxjs";

// clase Repository generica que puede ser implementada por unicamente por clases
export interface Repository<TEntity = {new (...args: any[]): {}}>
{
  // metodo encargado de obtener todos los regisitros de las entidades
  // TEntity representa a la entidad que implementa la clase.
  getAll(): Observable<TEntity[]>;

  // metodo encargo de obtener una entidad que corresponda con el identificador
  // que es pasado como argumento
  getById(id: number): Observable<TEntity>;

  // metodo encargado de crear una entidad
  create(entity: TEntity): boolean;

  // metodo encargado de modificar la entidad
  update(id: number): Observable<TEntity>;

  // metodo encargado de hacer la eliminacion de la entidad
  delete(id: number): Observable<TEntity>;
}
