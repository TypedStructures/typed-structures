export class Node<T> {

    private _data: T;
    private _next?: Node<T>;
    private _previous?: Node<T>;

    constructor(data: T) {
        this._data = data;
    }

    get data(): T {
        return this._data;
    }

    get next(): Node<T> | undefined {
        return this._next;
    }

    set data(data: T) {
        this._data = data;
    }

    set next(node: Node<T> | undefined) {
        this._next = node;
    }

    get previous(): Node<T> {
        return this._previous;
    }

    set previous(previous: Node<T>) {
        this._previous = previous;
    }

    public hasNext(): boolean {
        return this._next !== undefined ? true : false;
    }
}