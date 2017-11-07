export abstract class GenericTransportService {

    constructor() { }

    abstract writeRead(data: any): Promise<any>;

}