import { Node } from '../node/node';

export class DoublyLinkedList<T> {
    private _head?: Node<T>;
    private _tail?: Node<T>;
    private _size: number;

    constructor() {
        this._size = 0;
    }

    public length(): number {
        return this._size;
    }

    public empty(): boolean {
        return this.length() === 0;
    }

    public unshift(item: T) {
        if (item === undefined) {
            return 0;
        }

        if (this._head === undefined) {
            this._head = this.create(item);
            this._tail = this._head;

        } else {
            const node = this.create(item);
            node.next = this._head;
            this._head = node;
            this._tail = this._head;
        }

        ++this._size;
    }

    public shift(): T {
        if (this.empty()) {
            return undefined;
        } else {
            let result = this._head;
            this._head = this._head.next;
            --this._size;
            return result.data;
        }
    }

    public push(item: T): void {
        if (this.empty()) {
            this._head = this._tail = this.create(item);

        } else {
            let current = this.create(item);
            this._tail.next = current;
            current.previous = this._tail;
            this._tail = current;
        }

        ++this._size;
    }

    public pop(): T {

        if (this.empty()) {
           return undefined;
       }

       if (this.length() === 1) {
           this._head = this._tail = undefined;

       } else {
           let current = this._tail;
           this._tail = current.previous;
           return current.data;
       }

       --this._size;
   }

    private create(item: T): Node<T> {
        return new Node<T>(item);
    }
}