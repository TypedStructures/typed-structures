import { Node } from '../../..';
import { ILinkedList } from '../../..';

export class DoublyLinkedList<T> implements ILinkedList<T> {

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

        if (this.empty()) {
            this._head = this.create(item);
            this._tail = this._head;

        } else {
            const node = this.create(item);
            node.next = this._head;
            this._head.previous = node;
            this._head = node;
        }

        ++this._size;

        return this._size;
    }

    public shift(): T {
        if (this.empty()) {
            return undefined;
        }
        if (this.length() === 1) {
            const result = this._head;
            this._head = undefined;
            --this._size;
            return result.data;
        } else {
            let result = this._head;
            this._head = this._head.next;
            this._head.previous = undefined;
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
            let current = this._head;
            this._head = this._tail = undefined;
            --this._size;
            return current.data;

        } else {
            let current = this._tail;
            this._tail = this._tail.previous;
            this._tail.next = undefined;
            --this._size;
            return current.data;
        }

    }

    public remove(item: T): T {
        if (this.empty())
            return undefined;

        else if (this.length() === 1) {
            let current = this._head;
            this._head = this._tail = undefined;
            --this._size;
            return current.data;
        }
        else {
            let current = this._head;
            if (this._head.data === item) {
                this._head = this._head.next;
                return current.data;
            }

            let previous: Node<T>;
            while (current.next && current.data !== item) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;

            --this._size;
            return current.data;

        }
    }

    public forEach(callback: Function) {
        let current = this._head;
        let index = 0;
        while (current) {
            callback.call(current, current, index++, this);
            current = current.next;
        }
    }

    public filter(callback: Function): DoublyLinkedList<T> {
        let result = new DoublyLinkedList<T>();
        this.forEach((item: Node<T>, index: number) => {
            if (callback.call(item.data, item.data, index, this)) {
                result.push(item.data);
            }
        });
        return result;
    }

    public includes(item: T): boolean {
        return this.filter((element: T) => element === item).length() > 0;
    }

    public indexOf(item: T): number {
        let index = 0;
        let current = this._head;

        while (current) {
            if (current.data === item) {
                return index;
            }
            current = current.next;
            ++index;
        }

        return -1;

    }

    private create(item: T): Node<T> {
        return new Node<T>(item);
    }

    public peek(): T {
        return this._head.data;
    }

    public back(): T {
        return this._tail.data;
    }

    public clear(): void {
        this._head = this._tail = undefined;
        this._size = 0;
    }

    public contains(item: T): boolean {
        if (!this._head)
            return false;

        let current: Node<T> = this._head;

        while (current) {
            if (current.data === item)
                return true;
            current = current.next;
        }
        return false;
    }

    public find(item: T): Node<T> {
        let current = this._head;
        while (current) {
            if (current.data === item)
                return current;
            current = current.next;
        }
        return undefined;
    }
}