export class OrderClause {
    private _field: any;
    private _direction: string;

    constructor(field: any, direction: string) {
        this._field = field;
        this._direction = direction;
    }


    get field(): any {
        return this._field;
    }

    set field(value: any) {
        this._field = value;
    }

    get direction(): string {
        return this._direction;
    }

    set direction(value: string) {
        this._direction = value;
    }
}