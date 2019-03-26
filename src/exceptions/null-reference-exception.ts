import { Exception } from '..';

export class NullReferenceException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `NullReference${super.toString()}`;
    }
}