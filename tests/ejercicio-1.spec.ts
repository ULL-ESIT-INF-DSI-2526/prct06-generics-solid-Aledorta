import { beforeEach, describe, expect, test } from "vitest";
import { JediMasterCollection, StarshipCollection, HolocronCollection, Jedi, Starship, Holocron } from "../src/ejercicio-1/coleccionGalactica";
import { Afilacion } from "../src/ejercicio-1/registroGalactico";

describe("Ejercicio 1 - Registro Galáctico", () => {
  const jedi: Jedi = { name: "Anakin", afilacion: Afilacion.Republica, planet: "Tattoine" };
  const jedi2: Jedi = { name: "Duko", afilacion: Afilacion.Independientes, planet: "Nabu" };
  const starship: Starship = { name: "Caza-X", power: 50, yearOfConstrucction: 17019 };
  const starship2: Starship = { name: "Destructor", power: 100, yearOfConstrucction: 17020 };
  const holocron: Holocron = { name: "Obi-wan run", yearOfConstrucction: 17022 };
  const holocron2: Holocron = { name: "Sith Codex", yearOfConstrucction: 17021 };

  let jediCollection: JediMasterCollection;
  let starshipCollection: StarshipCollection;
  let holocronCollection: HolocronCollection;

  beforeEach(() => {
    jediCollection = new JediMasterCollection();
    jediCollection.add(jedi);
    jediCollection.add(jedi2);

    starshipCollection = new StarshipCollection();
    starshipCollection.add(starship);
    starshipCollection.add(starship2);

    holocronCollection = new HolocronCollection();
    holocronCollection.add(holocron);
    holocronCollection.add(holocron2);
  });

  test("Jedi(Anakin, Republica, Tatooine)", () => {
    expect(jediCollection.getAll()).toEqual([jedi, jedi2]);
  });

  test("Jedi(Anakin)", () => {
    expect(jediCollection.searchByName("Anakin")).toEqual([jedi]);
  });

  test("Jedi por afiliacion Republica", () => {
    expect(jediCollection.searchByAfilacion(Afilacion.Republica)).toEqual([jedi]);
  });

  test("Jedi por planeta Nabu", () => {
    expect(jediCollection.searchByPlanet("Nabu")).toEqual([jedi2]);
  });

  test("Eliminar Jedi existente", () => {
    jediCollection.remove(jedi);
    expect(jediCollection.getAll()).toEqual([jedi2]);
  });

  test("Eliminar Jedi no existente no altera la coleccion", () => {
    const unknownJedi: Jedi = { name: "Yoda", afilacion: Afilacion.Sith, planet: "Dagobah" };
    jediCollection.remove(unknownJedi);
    expect(jediCollection.getAll()).toEqual([jedi, jedi2]);
  });

  test("Nave(Caza-X, 50, 17019)", () => {
    expect(starshipCollection.getAll()).toEqual([starship, starship2]);
  });

  test("Nave por power 100", () => {
    expect(starshipCollection.searchByPower(100)).toEqual([starship2]);
  });

  test("17019 año de construcción", () => {
    expect(starshipCollection.searchByYearOfConstrucction(17019)).toEqual([starship]);
  });

  test("Holocron(Obi-wan run, 17022)", () => {
    expect(holocronCollection.getAll()).toEqual([holocron, holocron2]);
  });

  test("Holocron(17022)", () => {
    expect(holocronCollection.searchByYearOfConstrucction(17022)).toEqual([holocron]);
  });

  test("Holocron(17022)", () => {
    expect(holocronCollection.searchByYearOfConstrucction(17023)).toEqual([]);
  });

  test("Enum Afilacion contiene todos los valores esperados", () => {
    expect(Afilacion.Republica).toBe(0);
    expect(Afilacion.Imperio).toBe(1);
    expect(Afilacion.Sith).toBe(2);
    expect(Afilacion.Independientes).toBe(3);
  });
});