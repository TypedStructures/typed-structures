import { IBNode } from "./b-node-interface";

export class BNode<T> implements IBNode {

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

}