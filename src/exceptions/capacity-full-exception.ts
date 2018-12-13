import { Exception } from './exception';

export class CapacityFullException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `CapacityFullException${super.toString()}`;
    }
}