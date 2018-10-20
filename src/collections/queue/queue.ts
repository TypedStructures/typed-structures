import { DoublyLinkedList } from '../linked-list/doubly-linked-list/doubly-linked-list';

export class Queue<T> {

    private _items: DoublyLinkedList<T>;

    constructor() {
        this._items = new DoublyLinkedList<T>();
    }

    /**
     * Add an item to the end of a Queue
     * @param item item to enqueue
     */
    public enqueue(item: T): void {
        this._items.push(item);
    }

    /**
     * Remove an item from the Queue
     * @returns{T} item dequeued
     */
    public dequeue(): T {
        return this._items.shift();
    }

    /**
     * Return the item at the beginning of the Queue without removing it
     * @returns{T} the item at the beginning
     */
    public peek(): T {
        return this._items.peek();
    }




}