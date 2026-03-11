/**
 * Define la capacidad de imprimir documentos.
 */
export interface IPrint {
  /**
   * Imprime un documento.
   * @param doc Documento a imprimir.
   */
  print(doc: string): void;
}