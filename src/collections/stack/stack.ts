import { SinglyLinkedList } from '../linked-list/singly-linked-list/singly-linked-list';
import { IStack } from './stack-interface';

export class Stack<T> implements IStack<T> {

    private _items: SinglyLinkedList<T>;

    constructor() {
        this._items = new SinglyLinkedList<T>();
    }

    public length() {
        return this._items.length();
    }

    public stack(item: T): void {
        this._items.unshift(item);
    }

    public unstack(): T {
        return this._items.shift();
        
    }

    public peek(): T {
        // todo
        return undefined;
    }
}