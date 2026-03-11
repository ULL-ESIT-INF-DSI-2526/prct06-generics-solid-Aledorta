/**
 * Define el contrato común de una figura geométrica.
 */
export interface IShape {
  /**
   * Calcula el área de la figura.
   * @returns Área de la figura.
   */
  getArea(): number;
}