import { Exception } from './exception';

export class ReadOnlyBufferException extends Exception {

    constructor(message?: string) {
        super(message);
    }

    public toString() {
        return `ReadOnlyBuffer${super.toString()}`;
    }
}