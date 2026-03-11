import { Registrable } from "./Registrable";
import {TWeight} from "./TWeight";

export class Strenght implements Registrable<TWeight> {
  /** Constructor 
   * 
   * @param name - nombre del ejercicio
   * @param weight - peso del ejercicio en kg
   * @param series - series del ejercicio 
   * @param repeats - repeticiones en cada serie
   * @param calorias - calorias quemadas en una serie
  */
  constructor(private readonly name: string, private readonly weight: number, private readonly series, private readonly repeats: number, 
              private readonly calorias: number) {
    /** Manejp de errores */
    if (this.weight < 0) {
      throw new Error("Error");
    }
    /** Manejo de errores */
    if (this.series < 0) {
      throw new Error("Error");
    }
    /** Manejp de errores */
    if (this.repeats < 0) {
      throw new Error("Error");
    }
  }

  /** Getter de name */
  getname(): string {
    return this.name;
  }

  /** Getter de weight */
  getweight(): number {
    return this.weight;
  }

  /** Getter de series */
  getseries(): number {
    return this.series;
  }

  /** Getter de repeticiones */
  getrepeats(): number {
    return this.repeats;
  }

  /** Getter de calorias */
  getcalories(): number {
    return this.calorias;
  }

  /** Resumnen del ejercio */
  summary(): TWeight {
  return { ejercicice: this.name, weightT: this.weight};
  }

  /**
   * Caloar quemadas después de una series 
   * @returns
   */
  calories(): number {
    return (this.calorias * this.series);
  }
}