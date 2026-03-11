import { beforeEach, describe, expect, test } from "vitest";
import {AreaCalculator} from "../src/ejercicio-3/areacalculator";
import {Circle} from "../src/ejercicio-3/circle";
import {Triangle} from "../src/ejercicio-3/tri";
import {Rectangle} from "../src/ejercicio-3/rect";

describe("Ejercicio 3", () => {
  const calculator: AreaCalculator = new AreaCalculator();
  const circle: Circle = new Circle(10);
  const tri: Triangle = new Triangle(10, 10);
  const rect: Rectangle = new Rectangle(10, 10);

  test ("Area circulo", () => {
    expect(calculator.area(circle)).toBe(314);
  });

  test ("Area Triangulo", () => {
    expect(calculator.area(tri)).toBe(50);
  });

  test ("Area Rectangulo", () => {
    expect(calculator.area(rect)).toBe(100);
  })

});