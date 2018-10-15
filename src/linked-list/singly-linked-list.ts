import { Node } from '../node/node';

export class SinglyLinkedList<T> {

    private _head?: Node<T>;
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

        } else {
            const node = this.create(item);
            node.next = this._head;
            this._head = node;
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

    public pop(): T {

         if (this.empty()) {
            return undefined;
        }

        if (this.length() === 1) {
            this._head = undefined;

        } else {
            let current = this._head;
            let previous;

            while (current.hasNext()) {
                previous = current;
                current = current.next;
            }

            previous.next = undefined;

            return current.data;
        }

        --this._size;
    }

    public remove(item: T): T {
        if (this.empty()) {
            return undefined;
        } else {

            let current = this._head;
            let previous;

            while (current.data !== item) {
                previous = current;
                current = current.next;
            }

            previous.next = undefined;
            return current.data;

        }
    }

    public forEach(callback: Function) {
        let current = this._head;
        let index = 0;
        while (current) {
            callback.call(current, current.data, index++, this);
            current = current.next;
        }
    }

    public filter(callback: Function): SinglyLinkedList<T> {
        let result = new SinglyLinkedList<T>();
        this.forEach( (item: any, index: number) => {
            if (callback.call(item, item, index, this)) {
                result.push(item.data);
            }
        });
        return result;
    }

    public includes(item: T): boolean {
        return this.filter( (element: T)  => element === item).length() > 0;
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

}