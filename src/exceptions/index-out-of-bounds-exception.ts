import { Exception } from './exception';

export class IndexOutOfBoundsException extends Exception {

    constructor(message?: string) {
        super(message);
    }

    public toString() {
        return `IndexOutOfBounds${super.toString()}`;
    }
}