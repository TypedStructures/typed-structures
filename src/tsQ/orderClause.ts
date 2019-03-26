export class OrderClause {
     private readonly _field: any;
    private readonly _direction: string;

    constructor(field: any, direction: string) {
        this._field = field;
        this._direction = direction;
    }


    get field(): any {
        return this._field;
    }

    get direction(): string {
        return this._direction;
    }
}