import { IShape } from "./Ishape";

/**
 * Proporciona operaciones para calcular áreas de figuras.
 */
export class AreaCalculator {
  /**
   * Calcula el área de una figura.
   * @param s Figura de la que se desea calcular el área.
   * @returns Área de la figura recibida.
   */
  area(s: IShape): number {
    return s.getArea()
  }
}