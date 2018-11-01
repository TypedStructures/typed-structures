import { Exception } from '..';

export class IllegalArgumentException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `IllegalArgument${super.toString()}`;
    }
}