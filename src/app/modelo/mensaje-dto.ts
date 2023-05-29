export class MensajeDTO {
    estado!: number;
    error!: boolean;
    respuesta: any;

    constructor(respuesta: string) {
        this.respuesta = respuesta;
    }
}
