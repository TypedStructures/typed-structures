import {Set} from './set';
import {NullReferenceException} from '../util/exception/nullReferenceException';

describe('new Set', function () {
    it('should be empty', function () {
        let set: Set<number> = new Set<number>();
        expect(set.size()).toBe(0);
    });
});

describe('add null and undefined', function () {
    it('should throw NullReferenceException', function () {
        let set: Set<number> = new Set<number>();
        expect(() => set.add(null)).toThrow(new NullReferenceException('The element cannot be null nor undefined'));
        expect(() => set.add(undefined)).toThrow(new NullReferenceException('The element cannot be null nor undefined'));
    });
});

describe('add an already present value', function () {
   it('should return false', function () {
       let set: Set<number> = new Set<number>();
       set.add(1);
       expect(set.add(1)).toBe(false);
   });

   it('should add nothing', function () {
       let set: Set<number> = new Set<number>();
       set.add(1);
       set.add(1);
       expect(set.size()).toEqual(1);
   });
});

describe('add an not present value', function () {
    it('should return true', function () {
        let set: Set<number> = new Set<number>();
        expect(set.add(1)).toBe(true);
    });
    it('should add the value', function () {
        let set: Set<number> = new Set<number>();
        set.add(1);
        set.add(2);
        expect(set.size()).toEqual(2);
    });
});

describe('addAll', function () {
    it('should add as much as items as the array length', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.size()).toEqual(5);
    });
});

describe('clear', function () {
    it('should empty the set', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        set.clear();
        expect(set.size()).toEqual(0);
    });
});

describe('contains null and undefined', function () {
    it('should throw NullReferenceException', function () {
        let set: Set<number> = new Set<number>();
        expect(() => set.contains(null)).toThrow(new NullReferenceException('The element cannot be null nor undefined'));
        expect(() => set.contains(undefined)).toThrow(new NullReferenceException('The element cannot be null nor undefined'));
    });
});

describe('contains', function () {
    it('should be true', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.contains(1)).toBe(true);
    });

    it('should be false', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.contains(6)).toBe(false);
    });
});

describe('containsAll null and undefined', function () {
    it('should throw NullReferenceException', function () {
        let set: Set<number> = new Set<number>();
        expect(() => set.containsAll(null)).toThrow(new NullReferenceException('The collection cannot be null nor undefined'));
        expect(() => set.containsAll(undefined)).toThrow(new NullReferenceException('The collection cannot be null nor undefined'));
    });
});

describe('containsAll', function () {
    it('should be true', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.containsAll([1, 2, 3])).toBe(true);
    });

    it('should be false', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.containsAll([1, 2, 6])).toBe(false);
    });
});

describe('equals', function () {
    it('should be true', function () {
        let a: Set<number> = new Set<number>();
        a.addAll([1, 2, 3, 4, 5]);

        let b: Set<number> = new Set<number>();
        b.addAll([1, 2, 3, 4, 5]);

        expect(a.equals(b)).toBe(true);
    });

    it('should be false', function () {
        let a: Set<number> = new Set<number>();
        a.addAll([1, 2, 3, 4, 6]);

        let b: Set<number> = new Set<number>();
        b.addAll([1, 2, 3, 4, 5]);

        expect(a.equals(b)).toBe(false);
    });

    class A {
        constructor(a: string) {
            this.a = a;
        }
        a: string;

        equals(a: A) {
            return a.a === this.a;
        }
    }

    it('should be true with object', function () {

        let a: Set<A> = new Set<A>();
        a.addAll([new A('a'), new A('b'), new A('c'), new A('d')]);

        let b: Set<A> = new Set<A>();
        b.addAll([new A('a'), new A('b'), new A('c'), new A('d')]);

        expect(a.equals(b)).toBe(true);
    });

    it('should be false with object', function () {

        let a: Set<A> = new Set<A>();
        a.addAll([new A('a'), new A('b'), new A('c'), new A('e')]);

        let b: Set<A> = new Set<A>();
        b.addAll([new A('a'), new A('b'), new A('c'), new A('d')]);

        expect(a.equals(b)).toBe(false);
    });
});

describe('hashCode of int', function () {
    it('should be the same', function () {
        let a: Set<number> = new Set<number>();
        a.addAll([1, 2, 3, 4, 5]);

        let b: Set<number> = new Set<number>();
        b.addAll([1, 2, 3, 4, 5]);

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: Set<number> = new Set<number>();
        a.addAll([1, 2, 3, 4, 6]);

        let b: Set<number> = new Set<number>();
        b.addAll([1, 2, 3, 4, 5]);

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
        let a: Set<A> = new Set<A>();
        a.addAll([new A(1, 'a')]);

        let b: Set<A> = new Set<A>();
        b.addAll([new A(1, 'a')]);

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: Set<A> = new Set<A>();
        a.addAll([new A(1, 'a')]);

        let b: Set<A> = new Set<A>();
        b.addAll([new A(1, 'b')]);

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });
});

describe('isEmpty', function () {
    it('should be true', function () {
        let set: Set<number> = new Set<number>();
        expect(set.isEmpty()).toBe(true);
    });

    it('should be false', function () {
        let set: Set<number> = new Set<number>();
        set.add(1);
        expect(set.isEmpty()).toBe(false);
    });
});

describe('remove null and undefined', function () {
    it('should throw NullReferenceException', function () {
        let set: Set<number> = new Set<number>();
        expect(() => set.remove(null)).toThrow(new NullReferenceException('The element cannot be null nor undefined'));
        expect(() => set.remove(undefined)).toThrow(new NullReferenceException('The element cannot be null nor undefined'));
    });
});

describe('remove', function () {
    it('should return false', function () {
        let set: Set<number> = new Set<number>();
        expect(set.remove(1)).toBe(false);
    });

    it('should return true', function () {
        let set: Set<number> = new Set<number>();
        set.add(2);
        expect(set.remove(2)).toBe(true);
    });

    it('should empty a one element long set containing this element', function () {
        let set: Set<number> = new Set<number>();
        set.add(2);
        set.remove(2);
        expect(set.size()).toEqual(0);
    });
});

describe('removeAll null and undefined', function () {
    it('should throw NullReferenceException', function () {
        let set: Set<number> = new Set<number>();
        expect(() => set.removeAll(null)).toThrow(new NullReferenceException('The collection cannot be null nor undefined'));
        expect(() => set.removeAll(undefined)).toThrow(new NullReferenceException('The collection cannot be null nor undefined'));
    });
});

describe('removeAll', function () {
    it('should be true', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.removeAll([1, 2, 3])).toBe(true);
    });

    it('should be false', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.removeAll([6])).toBe(false);
    });
});

describe('retainAll null and undefined', function () {
    it('should throw NullReferenceException', function () {
        let set: Set<number> = new Set<number>();
        expect(() => set.retainAll(null)).toThrow(new NullReferenceException('The collection cannot be null nor undefined'));
        expect(() => set.retainAll(undefined)).toThrow(new NullReferenceException('The collection cannot be null nor undefined'));
    });
});

describe('retainAll', function () {
    it('should be true', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.retainAll([1, 2, 3])).toBe(true);
    });

    it('should be false', function () {
        let set: Set<number> = new Set<number>();
        set.addAll([1, 2, 3, 4, 5]);
        expect(set.retainAll([1, 2, 3, 4, 5])).toBe(false);
    });
});