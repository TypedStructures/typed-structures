import {SetInterface} from './setInterface';
import {NullReferenceException} from '../util/exception/nullReferenceException';
import {MapEntryInterface} from '../mapEntry/mapEntryInterface';

export class Set<E> implements SetInterface<E> {

    private _elements: E[];

    constructor() {
        this._elements = [];
    }

    add(e: E): boolean {

        if (e === null || e === undefined)
            throw new NullReferenceException('The element cannot be null nor undefined');

        if (this.contains(e))
            return false;
        else {
            this._elements.push(e);
            return true;
        }
    }

    addAll(c: E[]): boolean {
        let length: number = this._elements.length;
        c.forEach((element: E) => this.add(element));
        return this._elements.length !== length;
    }

    clear(): void {
        this._elements.length = 0;
    }

    contains(o: any): boolean {
        if (o === null || o === undefined)
            throw new NullReferenceException('The element cannot be null nor undefined');

        return this._elements
            .filter((e: E) => e === o).length > 0;
    }

    containsAll(c: any[]): boolean {

        if (c === null || c === undefined)
            throw new NullReferenceException('The collection cannot be null nor undefined');

        return c.every((e: E) => this.contains(e));
    }

    equals(o: SetInterface<E>): boolean {
        return this.size() === o.size() && o.toArray().every((e: E, index: number) => e === this._elements[index]);
    }

    hashCode(): number {
        let hash: number = 1;
        return this.toArray().reduce((accumulator: number, e: any) => {
            if (e.hashCode)
                hash = hash * 31 + e.hashCode();
            else
                hash = hash * 17 + +e;
            return hash;
        }, 0);
    }

    isEmpty(): boolean {
        return this._elements.length === 0;
    }

    remove(o: any): boolean {

        if (o === null || o === undefined)
            throw new NullReferenceException('The element cannot be null nor undefined');

        if (!this.contains(o))
            return false;
        else {
            this._elements = this._elements.filter((e: E) => e !== o);
            return true;
        }
    }

    removeAll(c: any[]): boolean {
        if (c === null || c === undefined)
            throw new NullReferenceException('The collection cannot be null nor undefined');

        let length: number = this._elements.length;
        c.forEach((e: E) => this.remove(e));
        return this._elements.length !== length;
    }

    retainAll(c: any[]): boolean {
        if (c === null || c === undefined)
            throw new NullReferenceException('The collection cannot be null nor undefined');

        let length: number = this._elements.length;

        let set: Set<E> = new Set<E>();
        set.addAll(c);

        this._elements = this._elements.filter((e: E) => set.contains(e));
        return this._elements.length !== length;
    }

    size(): number {
        return this._elements.length;
    }

    toArray(): E[] {
        return this._elements;
    }
}