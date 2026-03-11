/**
 * Coleccion base generica para entidades galacticas.
 *
 * @typeParam T - Tipo de entidad almacenada en la coleccion.
 */
export interface Registrable<T> {
  /** Devuelve resumen del ejercicio*/
  summary(): T;
  /** Devuelve calorias del ejercicio */
  calories(): number;
}