import { Exception } from '..';

export class NoDecoratorException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `NoDecorator${super.toString()}`;
    }
}