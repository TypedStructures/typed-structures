import { Exception } from './exception';

export class UnsupportedOperationException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `UnsupportedOperation${super.toString()}`;
    }
}