import { GalacticRegistry, SearchByName, SearchByAfilacion, SearchByPlanet, SearchByPower, SearchByYearOfConstrucction, Afilacion  } from "./registroGalactico";

/**
 * Coleccion base generica para entidades galacticas.
 *
 * @typeParam T - Tipo de entidad almacenada en la coleccion.
 */
export abstract class BasicGalacticCollection<T extends { name: string; }>
  implements GalacticRegistry<T>, SearchByName<T> {
  /**
   * Crea una coleccion con elementos iniciales opcionales.
   *
   * @param items - Elementos iniciales de la coleccion.
   */
  constructor(private items: T[] = []) {}

  /**
   * Anade un elemento a la coleccion.
   *
   * @param item - Entidad a anadir.
   */
  add(item: T) {
    this.items.push(item);
  }

  /**
   * Elimina un elemento de la coleccion si existe.
   *
   * @param item - Entidad a eliminar.
   */
  remove(item: T) {
    for (let i: number = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
      }
    }
  }

  /**
   * Obtiene todos los elementos almacenados.
   *
   * @returns Lista completa de entidades de la coleccion.
   */
  getAll(): T[] {
    return this.items;
  }

  /**
   * Busca elementos por nombre.
   *
   * @param name - Nombre a buscar.
   * @returns Entidades cuyo nombre coincide con el valor indicado.
   */
  searchByName(name: string): T[] {
    return this.items.filter((item: any) => item.name === name);
  }
}

/**
 * Representa un Jedi dentro del registro galactico.
 */
export interface Jedi {
  /** Nombre del Jedi. */
  name: string;
  /** Afiliacion o faccion del Jedi. */
  afilacion: Afilacion;
  /** Planeta de origen del Jedi. */
  planet: string;
}

/**
 * Coleccion especializada para maestros Jedi.
 */
export class JediMasterCollection extends BasicGalacticCollection<Jedi> implements SearchByAfilacion<Jedi>, SearchByPlanet<Jedi> {
  /**
   * Busca Jedi por afiliacion.
   *
   * @param afilacion - Faccion de referencia.
   * @returns Jedi que pertenecen a la afiliacion indicada.
   */
  searchByAfilacion(afilacion: Afilacion): Jedi[] {
    return this.getAll().filter((item: Jedi) => item.afilacion === afilacion);
  }

  /**
   * Busca Jedi por planeta de origen.
   *
   * @param planet - Nombre del planeta.
   * @returns Jedi asociados al planeta indicado.
   */
  searchByPlanet(planet: string): Jedi[] {
    return this.getAll().filter((item: Jedi) => item.planet === planet);
  }
}

/**
 * Representa una nave estelar registrada.
 */
export interface Starship {
  /** Nombre de la nave. */
  name: string;
  /** Nivel de poder de la nave. */
  power: number;
  /** Ano de construccion de la nave. */
  yearOfConstrucction: number;
}

/**
 * Coleccion especializada para naves estelares.
 */
export class StarshipCollection extends BasicGalacticCollection<Starship> implements SearchByPower<Starship>, SearchByYearOfConstrucction<Starship> {
  /**
   * Busca naves por nivel de poder.
   *
   * @param power - Potencia de referencia.
   * @returns Naves cuyo nivel de poder coincide con el valor indicado.
   */
  searchByPower(power: number): Starship[] {
    return this.getAll().filter((item: Starship) => item.power === power);
  }
  
  /**
   * Busca naves por ano de construccion.
   *
   * @param year - Ano de construccion de referencia.
   * @returns Naves construidas en el ano indicado.
   */
  searchByYearOfConstrucction(year: number): Starship[] { 
    return this.getAll().filter((item: Starship) => item.yearOfConstrucction === year);
  }
}

/**
 * Representa un holocron registrado.
 */
export interface Holocron {
  /** Nombre del holocron. */
  name: string;
  /** Ano de construccion del holocron. */
  yearOfConstrucction: number;
}

/**
 * Coleccion especializada para holocrones.
 */
export class HolocronCollection extends BasicGalacticCollection<Holocron> implements SearchByYearOfConstrucction<Holocron> {  
  /**
   * Busca holocrones por ano de construccion.
   *
   * @param year - Ano de construccion de referencia.
   * @returns Holocrones construidos en el ano indicado.
   */
  searchByYearOfConstrucction(year: number): Holocron[] {
    return this.getAll().filter((item: Holocron) => item.yearOfConstrucction === year);
  }
}