export abstract class GenericTransport {

    constructor() { }

    /**
     * Send data and return a Promise that resolves with the response.
     * @param data the data to send
     * @return Promise that resolves with return data
     */
    abstract writeRead(data: any): Promise<any>;

}