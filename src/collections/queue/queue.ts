import { DoublyLinkedList } from '../linked-list/doubly-linked-list/doubly-linked-list';
import { IQueue } from './queue-interface';

export class Queue<T> implements IQueue<T> {

    private _items: DoublyLinkedList<T>;

    constructor() {
        this._items = new DoublyLinkedList<T>();
    }

    public length() {
        return this._items.length();
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

    public back(): T {
        return this._items.back();
    }

    public empty(): boolean {
        return this._items.empty();
    }
}