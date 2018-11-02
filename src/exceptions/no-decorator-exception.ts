import { Exception } from '..';

export class NoDecoratorException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `NoDecoratorException${super.toString()}`;
    }
}