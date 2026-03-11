import { IFax } from "./IFax";

/**
 * Implementación básica de una máquina de fax.
 */
export class BasicFax implements IFax{
  /**
   * Intenta enviar un documento por fax.
   * @param doc Documento a enviar.
   * @throws Error Siempre, porque la operación no está soportada.
   */
  fax(doc: string): void {
    throw new Error("Not supported");
  }
}