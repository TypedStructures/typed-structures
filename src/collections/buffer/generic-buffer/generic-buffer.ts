import { Buffer } from '../../..';
import { IBuffer } from '../../..';
import { TsQ } from '../../../tsQ/decorator/TsQDecorator';

@TsQ({
    type: Array,
    key: '_buf'
})
export class GenericBuffer<T> extends Buffer {

    private readonly _buf: T[];
    private readonly _readonly: boolean;

    constructor(capacity: number, limit: number, position: number, mark: number, readonly: boolean = false) {
        super(capacity, limit, position, mark);
        this._buf = new Array<T>(capacity);
        this._readonly = readonly;
    }

    public get(): T {
        this.position(this.position() + 1);
        return this._buf[this.position() - 1];
    }

    public put(element: T): IBuffer {
        if (!this.isReadOnly()) {
            this._buf[this.position()] = element;
            this.position(this.position() + 1);
        }
        return this;
    }

    isReadOnly(): boolean {
        return this._readonly;
    }
}