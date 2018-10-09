import { Exception } from './exception';

export class ClassCastException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `ClassCast${super.toString()}`;
    }
}