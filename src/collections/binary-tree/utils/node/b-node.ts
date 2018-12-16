import { IBNode } from "./b-node-interface";

export class BNode<T> implements IBNode<T> {

    private _data: T;
    private _left?: BNode<T>;
    private _right?: BNode<T>;

    constructor(data: T) {
        this._data = data;
        this._left = undefined;
        this._right = undefined;
    }

    get data(): T {
        return this._data;
    }

    set data(data: T) {
        this._data = data;
    }

    get left(): BNode<T> | undefined {
        return this._left;
    }

    set left(node: BNode<T> | undefined) {
        this._left = node;
    }

    get right(): BNode<T> | undefined {
        return this._right;
    }

    set right(node: BNode<T> | undefined) {
        this._right = node;
    }

    public hasLeft(): boolean {
        return this._left !== undefined && this._left !== null;
    }

    public hasRight(): boolean {
        return this._right !== undefined && this._right !== null;
    }

    public getMinValue(): T {
        if (this._left === undefined) {
            return this.data
        } else {
            return this._left.getMinValue();
        }
    }

    public add(item: T): boolean {
        if (item < this.data) {
            if(this._left === undefined) {
                this._left = new BNode<T>(item);
                return true;
            } else {
                return this._left.add(item);
            }
        } else if (item > this.data) {
            if(this._right === undefined) {
                this._right = new BNode<T>(item);
                return true;
            } else {
                return this._right.add(item);
            }
        } else {
            return false;
        }
    }

    public remove(parent: BNode<T>, item: T): boolean {
        if (item < this.data) {
            if (this._left !== undefined)
                return this._left.remove(this, item);
            else
                return false;

        } else if (item > this.data) {
            if (this._right !== undefined)
                return this._right.remove(this, item);
            else
                return false;
        } else {
            if (this._left !== undefined && this._right !== undefined) {
                this.data = this._right.getMinValue();
                this._right.remove(this, this.data);
            } else if (parent.left === this) {
                parent.left = (this._left !== undefined) ? this._left : this._right;
            } else if (parent.right === this) {
                parent.right = (this._left !== undefined) ? this._left : this._right;
            }
            return true;
        }
    }
}