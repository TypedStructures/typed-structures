import { Buffer } from '../../..';
import { IBuffer } from '../../..';
import { IllegalArgumentException } from '../../..';

export class GenericRingBuffer<T> extends Buffer {

    private readonly _buf: T[];
    private readonly _readonly: boolean;
    private _readPosition: number;

    constructor(capacity: number, limit: number, position: number, readPosition: number, mark: number, readonly: boolean = false) {
        super(capacity, limit, position, mark);
        this._readPosition = readPosition;
        this._buf = new Array<T>(capacity);
        this._readonly = readonly;
    }

    public get(): T {
        let position: number = (this.readPosition() + 1) % this.capacity();
        this.readPosition(position);
        return this._buf[position - 1];
    }

    public put(element: T): IBuffer {
        this._buf[this.position()] = element;
        this.position((this.position() + 1) % this.capacity());
        return this;
    }

    isReadOnly(): boolean {
        return this._readonly;
    }

    public readPosition(): number;
    public readPosition(newPosition: number): IBuffer;
    public readPosition(newPosition?: number): any {

        if (newPosition === undefined)
            return this._readPosition;

        if ((newPosition < 0) || (newPosition > this.limit()))
            throw new IllegalArgumentException ('New read position out of bound');

        this._readPosition = newPosition;
        return this;
    }
}