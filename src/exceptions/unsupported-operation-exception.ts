import { Exception } from '..';

export class UnsupportedOperationException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `UnsupportedOperation${super.toString()}`;
    }
}