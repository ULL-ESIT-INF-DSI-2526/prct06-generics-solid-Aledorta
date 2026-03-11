import { IFax } from "./IFax";

/**
 * Servicio para enviar documentos mediante una máquina de fax.
 */
export class SendFax{
  /**
   * Envía un documento usando la máquina de fax proporcionada.
   * @param machine Máquina de fax que realizará el envío.
   * @param doc Documento que se desea enviar.
   */
  sendFax(machine: IFax, doc: string): void {
    machine.fax(doc);
    console.log("Enviando Fax: " + doc);
  }
}