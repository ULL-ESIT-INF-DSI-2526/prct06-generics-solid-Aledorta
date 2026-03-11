/**
 * Interfaz que representa un libro de recetas.
 * 
 * @interface IRecipe
 */
export interface IRecipe {
  /** Nombre del libro de recetas. */
  name: string;
  /** Autor del libro de recetas. */
  yearOfPublication: number;
  /** Número de recetas incluidas en el libro. */
  steps: number;
}