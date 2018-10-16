import {MapEntry} from './map-entry';

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

    class A {
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