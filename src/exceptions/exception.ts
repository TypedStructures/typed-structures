export class Exception {

    private _message: string;

    constructor(message: string) {
        this._message = message;
    }

    toString(): string {
        return `Exception: ${this._message}\n`;
    }
}