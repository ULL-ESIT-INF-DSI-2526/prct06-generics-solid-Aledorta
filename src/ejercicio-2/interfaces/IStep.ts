/** 
 * Interfaz que representa un paso en un proceso o procedimiento.
 * 
 * @interface IStep
 */
export interface IStep {
  /** Descripción del paso. */
  description: string;
  /** Duración estimada del paso en minutos. */
  duration: number;
  /** Etiquetas asociadas al paso. */
  tags: string[];
  /** Indica si el paso es opcional. */
  optional_step: boolean;
  /** Número de veces que se ha completado el paso. */
  complete_times: number;
}