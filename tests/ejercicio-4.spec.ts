import { beforeEach, describe, expect, test, vi } from "vitest";
import {BasicFax} from "../src/ejercicio-4/BasicFax"
import {BasicPrinter} from "../src/ejercicio-4/BasicPrinter"
import {BasicScan} from "../src/ejercicio-4/BasicScan"
import {SendFax} from "../src/ejercicio-4/SendFax"

describe("Ejercicio dispositivos oficina", () => {

  test("BasicPrinter imprime un documento", () => {
    const printer = new BasicPrinter();

    const spy = vi.spyOn(console, "log");

    printer.print("doc1");

    expect(spy).toHaveBeenCalledWith("Imprimiendo: doc1");

    spy.mockRestore();
  });

  test("BasicFax lanza error porque no soporta fax", () => {
    const fax = new BasicFax();

    expect(() => fax.fax("doc1")).toThrow("Not supported");
  });

  test("BasicScan lanza error porque no soporta escaneo", () => {
    const scanner = new BasicScan();

    expect(() => scanner.scan("doc1")).toThrow("Not supported");
  });

  test("SendFax usa una máquina de fax", () => {
    const fax = new BasicFax();
    const sender = new SendFax();

    const spy = vi.spyOn(fax, "fax").mockImplementation(() => {});
    const logSpy = vi.spyOn(console, "log");

    sender.sendFax(fax, "doc1");

    expect(spy).toHaveBeenCalledWith("doc1");
    expect(logSpy).toHaveBeenCalledWith("Enviando Fax: doc1");

    spy.mockRestore();
    logSpy.mockRestore();
  });

});