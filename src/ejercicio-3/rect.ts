import { IShape } from "./Ishape";

/**
 * Representa un rectángulo.
 */
export class Rectangle implements IShape {
  /**
   * Crea un rectángulo.
   * @param base Base del rectángulo.
   * @param height Altura del rectángulo.
   */
  constructor(private base: number, private height: number) {}

  /**
   * Calcula el área del rectángulo.
   * @returns Área del rectángulo.
   */
  getArea(): number {
    return this.base * this.height;
  }
}