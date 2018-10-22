import { Exception } from './exception';

export class InvalidMarkException extends Exception {

    constructor(message?: string) {
        super(message);
    }

    public toString() {
        return `InvalidMark${super.toString()}`;
    }
}