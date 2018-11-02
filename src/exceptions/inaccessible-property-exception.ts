import { Exception } from '..';

export class InaccessiblePropertyException extends Exception {

    constructor(message: string) {
        super(message);
    }

    public toString() {
        return `InaccessiblePropertyException${super.toString()}`;
    }
}