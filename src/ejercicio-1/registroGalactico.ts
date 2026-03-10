/**
 * Posibles facciones dentro del universo galáctico.
 */
export enum Afilacion {
  /** Alianza que representa al bando de la República. */
  Republica = 0,
  /** Alianza que representa al Imperio. */
  Imperio = 1,
  /** Facción vinculada al lado oscuro de la Fuerza. */
  Sith = 2,
  /** Entidades sin afiliación principal. */
  Independientes = 3,
};

/**
 * Interfaz base para un registro galáctico genérico.
 *
 * @typeParam T - Tipo de entidad almacenada en el registro.
 */
export interface GalacticRegistry<T> {
  /**
   * Añade un elemento al registro.
   *
   * @param item - Entidad que se incorpora al registro.
   */
  add(item: T): void;

  /**
   * Elimina un elemento del registro.
   *
   * @param item - Entidad que se elimina del registro.
   */
  remove(item: T): void;

  /**
   * Obtiene todos los elementos almacenados.
   *
   * @returns Colección completa de entidades registradas.
   */
  getAll(): T[];
}

/**
 * Contrato para búsquedas por nombre.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda.
 */
export interface SearchByName<T> {
  /**
   * Busca entidades por nombre.
   *
   * @param name - Nombre que debe coincidir en la entidad.
   * @returns Entidades cuyo nombre coincide con el valor indicado.
   */
  searchByName(name: string): T[];
}

/**
 * Contrato para búsquedas por afiliación/facción.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda.
 */
export interface SearchByAfilacion<T> {
  /**
   * Busca entidades por afiliación.
   *
   * @param afilacion - Facción de referencia para la búsqueda.
   * @returns Entidades que pertenecen a la afiliación indicada.
   */
  searchByAfilacion(afilacion: Afilacion): T[];
}

/**
 * Contrato para búsquedas por planeta de origen.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda.
 */
export interface SearchByPlanet<T> {
  /**
   * Busca entidades por planeta.
   *
   * @param planet - Nombre del planeta de referencia.
   * @returns Entidades asociadas al planeta indicado.
   */
  searchByPlanet(planet: string): T[];
}

/**
 * Contrato para búsquedas por nivel de poder.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda.
 */
export interface SearchByPower<T> {
  /**
   * Busca entidades por nivel de poder.
   *
   * @param power - Nivel de poder usado como criterio de búsqueda.
   * @returns Entidades cuyo poder coincide con el valor indicado.
   */
  searchByPower(power: number): T[];
}

/**
 * Contrato para búsquedas por año de construcción.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda.
 */
export interface SearchByYearOfConstrucction<T> {
  /**
   * Busca entidades por año de construcción.
   *
   * @param year - Año de construcción usado como criterio.
   * @returns Entidades construidas en el año indicado.
   */
  searchByYearOfConstrucction(year: number): T[];
}