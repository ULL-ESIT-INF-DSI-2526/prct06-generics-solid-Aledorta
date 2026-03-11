import { Registrable } from "./Registrable";

/** Clase cardio */
export class Cardio implements Registrable<string> {
  /** Constructor 
	 * 
	 * @param name - nombre del ejercicio
	 * @param distance - distancia recorrida
	 * @param duration - duracion del ejercicio
	 * @param type - tipo de ejercicio
	 * @param calorias - calorias quemadas
	*/
  constructor(private readonly name: string, private readonly distance: number, private readonly duration: number, private readonly type: string,
              private readonly calorias: number) {
    /** Manejp de errores */
    if (this.distance < 0) {
      throw new Error("Error");
    }
    /** Manejp de errores */
    if (this.duration < 0) {
      throw new Error("Error");
    }

  }
  
  /** Getter name */
  getname(): string {
    return this.name;
  }

  /** Getter distance */
  getdistance(): number {
    return this.distance;
  }

	/** Getter duration */
  getduration(): number {
    return this.duration;
  }

	/** Getter tipo */
  gettype(): string {
    return this.type;
  }

	/** Resumen del la interfaz generica Registrable */
  summary(): string {
    return (this.name + this.duration);
  }

	/** Calorías quemadas */
  calories(): number {
    return this.calorias;
  }
}