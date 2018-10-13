import {Set} from './set/set';
import {Map} from './map/map';
import {Function} from './function/function';
import {MapEntryInterface} from './mapEntry/mapEntryInterface';

class A {
    get a(): number {
        return this._a;
    }

    set a(value: number) {
        this._a = value;
    }

    get b(): string {
        return this._b;
    }

    set b(value: string) {
        this._b = value;
    }

    get c(): boolean {
        return this._c;
    }

    set c(value: boolean) {
        this._c = value;
    }

    get d(): B {
        return this._d;
    }

    set d(value: B) {
        this._d = value;
    }
    private _a: number;
    private _b: string;
    private _c: boolean;
    private _d: B;
}

class B extends A {
    private _e: number;
    private _f: string;
    private _g: boolean;

    get e(): number {
        return this._e;
    }

    set e(value: number) {
        this._e = value;
    }

    get f(): string {
        return this._f;
    }

    set f(value: string) {
        this._f = value;
    }

    get g(): boolean {
        return this._g;
    }

    set g(value: boolean) {
        this._g = value;
    }
}

let set: Set<A> = new Set<A>();

let a = new A();
let b = new A();
let c = new A();
let d = new B();

set.add(a);
set.add(b);
set.add(c);
set.add(d);

console.log(set.contains(a));
console.log(set.contains(d));
console.log(set.retainAll([a, d]));
console.log(set.size());

let map: Map<A, B> = new Map<A, B>();

map.put(a, d);
console.log(map.containsKey(d));

let f: Function<number, number> = new Function<number, number>((a: number) => a * a);
let t: Function<number, number> = new Function<number, number>((a: number) => a - 1);

console.log(f.apply(4));

let fat = f.compose(t);

console.log(fat.apply(4));
console.log(fat.identity().apply(2));

let objectFunction: Function<MapEntryInterface<A, B>, MapEntryInterface<A, B>> = new Function<MapEntryInterface<A, B>, MapEntryInterface<A, B>>((mapEntry: MapEntryInterface<A, B>) => {
    mapEntry.getValue().a = 10;
    return mapEntry;
});

let consoleLogFunction: Function<MapEntryInterface<A, B>, MapEntryInterface<A, B>> = new Function<MapEntryInterface<A, B>, MapEntryInterface<A, B>>((mapEntry: MapEntryInterface<A, B>) => {
    console.log(mapEntry);
    return mapEntry;
});

// console.log(map.forEach(objectFunction));
console.log(map.forEach(consoleLogFunction));