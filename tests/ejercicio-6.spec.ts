import { beforeEach, describe, expect, test, vi } from "vitest";
import {Strenght} from "../src/ejercicio-6/Strength"
import {Cardio} from "../src/ejercicio-6/Cardio"

describe("Ejercicio-6", () => {
  let cardioE: Cardio;
  cardioE= new Cardio("Correr", 5, 15, "Caminar", 150); 
  let strenghtE: Strenght;
  strenghtE = new Strenght("Press", 40, 4, 8, 40)

  test("getters" , () => {
    expect(cardioE.getname()).toBe("Correr");
  });

  test("getters" , () => {
    expect(cardioE.getdistance()).toBe(5);
  });

  test("getters" , () => {
    expect(cardioE.getduration()).toBe(15);
  });

  test("getters" , () => {
    expect(cardioE.gettype()).toBe("Caminar");
  });

  test("getters" , () => {
    expect(strenghtE.getname()).toBe("Press");
  });

  test("getters" , () => {
    expect(strenghtE.getweight()).toBe(40);
  });

  test("getters" , () => {
    expect(strenghtE.getseries()).toBe(4);
  });

  test("getters" , () => {
    expect(strenghtE.getrepeats()).toBe(8);
  });

  test("getters" , () => {
    expect(strenghtE.getcalories()).toBe(40);
  });

  test("Summary" , () => {
    expect(cardioE.summary()).toBe("Correr15")
  })

  test("Summary" , () => {
  expect(cardioE.summary()).toBe("Correr15")
  })

  test("Summary" , () => {
    expect(strenghtE.summary()).toEqual({
    ejercicice: "Press",
    weightT: 40
    });
  });

  test("Calories", () => {
    expect(strenghtE.calories()).toEqual(160);
  })

  test("Calories", () => {
    expect(cardioE.calories()).toEqual(150);
  })

})