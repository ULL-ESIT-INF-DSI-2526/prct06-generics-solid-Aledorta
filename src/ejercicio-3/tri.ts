import { IShape } from "./Ishape";

/**
 * Representa un triángulo.
 */
export class Triangle implements IShape {
  /**
   * Crea un triángulo.
   * @param base Base del triángulo.
   * @param height Altura del triángulo.
   */
  constructor(private base: number, private height: number) {}

  /**
   * Calcula el área del triángulo.
   * @returns Área del triángulo.
   */
  getArea(): number {
    return (this.base * this.height) / 2;
  }

}