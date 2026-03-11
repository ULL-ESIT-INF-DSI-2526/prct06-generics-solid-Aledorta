/**
 * Define la capacidad de escanear documentos.
 */
export interface IScan {
  /**
   * Escanea un documento.
   * @param doc Documento a escanear.
   * @returns Resultado del escaneo del documento.
   */
  scan(doc: string): string;
}