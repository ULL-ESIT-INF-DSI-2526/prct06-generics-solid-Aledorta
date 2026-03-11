import { IPrint } from "./IPrint";

/**
 * Implementación básica de una impresora.
 */
export class BasicPrinter implements IPrint{
  /**
   * Imprime un documento en la salida estándar.
   * @param doc Documento a imprimir.
   */
  print(doc: string): void {
    console.log("Imprimiendo: " + doc);
  }
}