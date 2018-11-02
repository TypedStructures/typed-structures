import { SinglyLinkedList } from '../..';
import { IStack } from '../..';
import {TsQ} from '../../tsQ/decorator/TsQDecorator';

@TsQ({
    type: Array,
    getter: 'toArray',
    embedGetter: 'data'
})
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
        return this._items.peek();
    }

    public empty(): boolean {
        return this._items.empty();
    }

    public toArray(): T[] {
        return this._items.toArray();
    }
}