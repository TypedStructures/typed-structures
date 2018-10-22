import { IBuffer } from './buffer-interface';
import { IllegalArgumentException } from '../../exceptions/illegal-argument-exception';
import { InvalidMarkException } from '../../exceptions/invalid-mark-exception';

export abstract class Buffer implements IBuffer {

    private readonly _cap: number = 0;
    private _limit: number = 0;
    private _pos: number = 0;
    private _mark: number = -1;

    protected constructor(capacity: number, limit: number, position: number, mark: number) {
        if (capacity < 0)
            throw new IllegalArgumentException ('Negative capacity');

        this._cap = capacity;
        this.limit(limit);
        this.position(position);

        if (mark >= 0) {
            if (mark > this._pos)
                throw new IllegalArgumentException ('Mark is greater than current position');
            this._mark = mark;
        }
    }

    public capacity(): number {
        return this._cap;
    }

    public clear(): IBuffer {
        this._limit = this._cap;
        this._pos = 0;
        this._mark = -1;
        return this;
    }

    public flip(): IBuffer {
        this._limit = this._pos;
        this._pos = 0;
        this._mark = -1;
        return this;
    }

    public hasRemaining(): boolean {
        return this.remaining() > 0;
    }

    public abstract isReadOnly(): boolean;

    public limit(): number;
    public limit(newLimit: number): IBuffer;
    public limit(newLimit?: number): any {

        if (!newLimit)
            return this._limit;

        if ((newLimit < 0) || (newLimit > this._cap))
            throw new IllegalArgumentException ('New limit out of bound');

        if (newLimit < this._mark)
            this._mark = -1;

        if (this._pos > newLimit)
            this._pos = newLimit;

        this._limit = newLimit;
        return this;
    }

    public mark (): IBuffer {
        this._mark = this._pos;
        return this;
    }

    public position(): number;
    public position(newPosition: number): IBuffer;
    public position(newPosition?: number): any {

        if (newPosition === undefined)
            return this._pos;

        if ((newPosition < 0) || (newPosition > this._limit))
            throw new IllegalArgumentException ('New position out of bound');

        if (newPosition <= this._mark)
            this._mark = -1;

        this._pos = newPosition;
        return this;
    }

    public remaining(): number {
        return this._limit - this._pos;
    }

    public reset(): IBuffer {
        if (this._mark === -1)
            throw new InvalidMarkException();

        this._pos = this._mark;
        return this;
    }

    public rewind(): IBuffer {
        this._pos = 0;
        this._mark = -1;
        return this;
    }
}