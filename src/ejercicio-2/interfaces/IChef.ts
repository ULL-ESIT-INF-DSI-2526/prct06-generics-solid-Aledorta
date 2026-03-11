/**
 * Interfaz que representa a un chef con su nombre, número de seguidores y recetas creadas.
 * 
 */

export interface Chef {
  /** Nombre del chef. */
  name: string;
  /** Número de seguidores del chef. */
  followers: number;
  /** Recetas creadas por el chef. */
  recipes: string[];
}