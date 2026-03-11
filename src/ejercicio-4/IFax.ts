/**
 * Define la capacidad de enviar un documento por fax.
 */
export interface IFax {
  /**
   * Envía un documento por fax.
   * @param doc Documento que se desea enviar.
   */
  fax(doc: string): void;
}