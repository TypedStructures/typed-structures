import { DoublyLinkedList } from '../linked-list/doubly-linked-list';

export class Queue<T> {

    private _items: DoublyLinkedList<T>;

    constructor() {
        this._items = new DoublyLinkedList<T>();
    }

    public enqueue(item: T): void {
        this._items.push(item);
    }

    public dequeue(): T {
        return this._items.shift();
    }

    public peek(): T {
        return this._items.peek();
    }




}