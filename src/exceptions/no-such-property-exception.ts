import { Exception } from '..';

export class NoSuchPropertyException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `NoSuchProperty${super.toString()}`;
    }
}