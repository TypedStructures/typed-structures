import { MapEntry } from './map-entry';
import { flattenObject } from '../../../../util/flatten';

describe('equals', function () {
    it('should be true', function () {
        let a: MapEntry<number, number> = new MapEntry<number, number>(1, 2);
        let b: MapEntry<number, number> = new MapEntry<number, number>(1, 2);
        expect(a.equals(b)).toBe(true);
    });

    it('should be false', function () {
        let a: MapEntry<number, number> = new MapEntry<number, number>(1, 2);
        let b: MapEntry<number, number> = new MapEntry<number, number>(2, 2);
        expect(a.equals(b)).toBe(false);
    });

    it('should be true', function () {
        let a: MapEntry<number, number> = new MapEntry<number, number>(null, null);
        let b: MapEntry<number, number> = new MapEntry<number, number>(null, null);
        expect(a.equals(b)).toBe(true);
    });

    it('should be false', function () {
        let a: MapEntry<number, number> = new MapEntry<number, number>(null, 2);
        let b: MapEntry<number, number> = new MapEntry<number, number>(2, null);
        expect(a.equals(b)).toBe(false);
    });
});

describe('getKey', function () {
    it('should retrieve key', function () {
        let mapEntry: MapEntry<number, number> = new MapEntry<number, number>(1, 2);
        expect(mapEntry.getKey()).toEqual(1);
    });
});

describe('getValue', function () {
    it('should retrieve value', function () {
        let mapEntry: MapEntry<number, number> = new MapEntry<number, number>(1, 2);
        expect(mapEntry.getValue()).toEqual(2);
    });
});

describe('hashCode of int', function () {
    it('should be the same', function () {
        let a: MapEntry<number, number> = new MapEntry<number, number>(1, 2);

        let b: MapEntry<number, number> = new MapEntry<number, number>(1, 2);

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: MapEntry<number, number> = new MapEntry<number, number>(1, 2);

        let b: MapEntry<number, number> = new MapEntry<number, number>(1, 3);

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });
});

describe('hashCode of object', function () {

    class B {
        a: number;
        b: string;

        constructor(a: number, b: string) {
            this.a = a;
            this.b = b;
        }
    }

    class D {
        a: number;
        b: string;
        [key: number]: number;

        constructor(a: number, b: string) {
            this.a = a;
            this.b = b;
        }

        hashCode() {
            let hash: number = 1;
            return Object.keys(this).reduce((accumulator: number, key: any) => {
                hash = hash * 17 + <number>this[key];
                return hash;
            }, 0);
        }
    }

    class A {
        a: number;
        b: string;
        c: B;
        d: D;
        [key: number]: number;

        constructor(a: number, b: string) {
            this.a = a;
            this.b = b;
            this.c = new B(a, b);
            this.d = new D(a, b);
        }

        hashCode() {
            let hash: number = 1;
            return Object.keys(this).reduce((accumulator: number, key: any) => {
                hash = (typeof <number>this[key] === 'object' ? typeof (<any>this[key]).hashCode === 'function' ? (<any>this[key]).hashCode() : flattenObject(<any>this[key]) : <number>this[key]);
                return hash;
            }, 0);
        }
    }

    class E {
        a: B;
        [key: number]: number;

        constructor(b: B) {
            this.a = b;
        }
    }

    it('should be the same', function () {
        let a: MapEntry<number, E> = new MapEntry<number, E>(1, new E(new B(1, 'a')));

        let b: MapEntry<number, E> = new MapEntry<number, E>(1, new E(new B(1, 'a')));

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: MapEntry<number, E> = new MapEntry<number, E>(1, new E(new B(1, 'a')));

        let b: MapEntry<number, E> = new MapEntry<number, E>(1, new E(new B(1, 'b')));

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });

    it('should be the same', function () {
        let a: MapEntry<number, A> = new MapEntry<number, A>(1, new A(1, 'a'));

        let b: MapEntry<number, A> = new MapEntry<number, A>(1, new A(1, 'a'));

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: MapEntry<number, A> = new MapEntry<number, A>(1, new A(1, 'a'));

        let b: MapEntry<number, A> = new MapEntry<number, A>(1, new A(1, 'b'));

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });

    it('should be the same', function () {
        let a: MapEntry<number, B> = new MapEntry<number, B>(1, new B(1, 'a'));

        let b: MapEntry<number, B> = new MapEntry<number, B>(1, new B(1, 'a'));

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: MapEntry<number, B> = new MapEntry<number, B>(1, new B(1, 'a'));

        let b: MapEntry<number, B> = new MapEntry<number, B>(1, new B(1, 'b'));

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });

    it('should be the same', function () {
        let a: MapEntry<A, A> = new MapEntry<A, A>(new A(1, 'a'), new A(1, 'a'));

        let b: MapEntry<A, A> = new MapEntry<A, A>(new A(1, 'a'), new A(1, 'a'));

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: MapEntry<A, A> = new MapEntry<A, A>(new A(1, 'a'), new A(1, 'a'));

        let b: MapEntry<A, A> = new MapEntry<A, A>(new A(1, 'a'), new A(1, 'b'));

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });

    it('should be the same', function () {
        let a: MapEntry<B, A> = new MapEntry<B, A>(new B(1, 'a'), new A(1, 'a'));

        let b: MapEntry<B, A> = new MapEntry<B, A>(new B(1, 'a'), new A(1, 'a'));

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: MapEntry<B, A> = new MapEntry<B, A>(new B(1, 'a'), new A(1, 'a'));

        let b: MapEntry<B, A> = new MapEntry<B, A>(new B(1, 'a'), new A(1, 'b'));

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });

    it('should be the same', function () {
        let a: MapEntry<A, number> = new MapEntry<A, number>(new A(1, 'a'), 1);

        let b: MapEntry<A, number> = new MapEntry<A, number>(new A(1, 'a'), 1);

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: MapEntry<A, number> = new MapEntry<A, number>(new A(1, 'a'), 1);

        let b: MapEntry<A, number> = new MapEntry<A, number>(new A(1, 'a'), 2);

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });
});

describe('setValue', function () {
    it('should set the value', function () {
        let mapEntry: MapEntry<number, number> = new MapEntry<number, number>(1, 3);
        mapEntry.setValue(5);
        expect(mapEntry.getValue()).toEqual(5);
    });

    it('should return the old value', function () {
        let mapEntry: MapEntry<number, number> = new MapEntry<number, number>(1, 3);
        expect(mapEntry.setValue(5)).toEqual(3);
    });
});