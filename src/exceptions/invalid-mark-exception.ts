import { Exception } from '..';

export class InvalidMarkException extends Exception {

    constructor(message?: string) {
        super(message);
    }

    public toString() {
        return `InvalidMark${super.toString()}`;
    }
}