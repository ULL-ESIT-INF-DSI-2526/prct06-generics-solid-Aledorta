import { IShape } from "./Ishape";

/**
 * Representa un círculo.
 */
export class Circle implements IShape {
  /**
   * Crea un círculo.
   * @param radius Radio del círculo.
   */
  constructor(private radius: number) {}

  /**
   * Calcula el área del círculo.
   * @returns Área truncada del círculo.
   */
  getArea(): number {
    return Math.trunc(Math.PI * this.radius * this.radius);
  }
}