import {Node} from '../utils/node/node';
import {ILinkedList} from '../linked-list-interface';

export class SinglyLinkedList<T> implements ILinkedList<T> {

    private _head?: Node<T>;
    private _size: number;

    constructor() {
        this._size = 0;
    }

    clear(): void {
        this._head = undefined;
        this._size = 0;
    }

    contains(item: T): boolean {
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

    empty(): boolean {
        return this._size === 0;
    }

    filter(callback: Function): SinglyLinkedList<T> {
        let result = new SinglyLinkedList<T>();
        this.forEach((item: Node<T>, index: number) => {
            if (callback.call(item.data, item.data, index, this)) {
                result.push(item.data);
            }
        });
        return result;
    }

    find(item: T): Node<T> {
        let current = this._head;
        while (current) {
            if (current.data === item)
                return current;
            current = current.next;
        }
        return undefined;
    }


    forEach(callback: Function): void {
        let current = this._head;
        let index = 0;
        while (current) {
            callback.call(current, current, index++, this);
            current = current.next;
        }
    }

    includes(item: T): boolean {
        return this.filter((element: T) => element === item).length() > 0;
    }

    indexOf(item: T): number {
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

    length(): number {
        return this._size;
    }

    peek(): T {
        return this._head.data;
    }

    pop(): T {
        if (this.empty()) {
            return undefined;
        }

        let current = this._head;

        if (this.length() === 1) {
            this._head = undefined;

        } else {
            let previous;

            while (current.hasNext()) {
                previous = current;
                current = current.next;
            }

            previous.next = undefined;
        }

        --this._size;

        return current.data;
    }

    push(item: T): void {
        if (this.empty()) {
            this._head = this.create(item);

        } else {
            let current = this._head;

            while (current.hasNext()) {
                current = current.next;
            }
            current.next = this.create(item);
        }

        ++this._size;
    }

    remove(item: T): T {
        if (this.empty())
            return undefined;

        else if (this.length() === 1) {
            let current = this._head;
            this._head = undefined;
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
            while (current.hasNext() && current.data !== item) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;

            --this._size;
            return current.data;

        }
    }

    shift(): T {
        if (this.empty()) {
            return undefined;
        } else {
            let result = this._head;
            this._head = this._head.next;
            --this._size;
            return result.data;
        }
    }

    unshift(item: T): number {
        if (item === undefined) {
            return 0;
        }

        if (this._head === undefined) {
            this._head = this.create(item);

        } else {
            const node = this.create(item);
            node.next = this._head;
            this._head = node;
        }

        ++this._size;

        return this._size;
    }

    private create(item: T): Node<T> {
        return new Node<T>(item);
    }
}