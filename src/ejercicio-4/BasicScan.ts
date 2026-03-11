import {IScan} from "./IScan";

/**
 * Implementación básica de un escáner.
 */
export class BasicScan implements IScan{
  /**
   * Intenta escanear un documento.
   * @param doc Documento a escanear.
   * @returns Resultado del escaneo.
   * @throws Error Siempre, porque la operación no está soportada.
   */
  scan(doc: string): string {
    throw new Error("Not supported");
  }
}