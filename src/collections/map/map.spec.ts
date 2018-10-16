import {Map} from './map';
import {BiFunction} from '../../functions/bi-function/bi-function';
import {Function} from '../../functions/function/function';
import {NullReferenceException} from '../../exceptions/null-reference-exception';
import {MapEntry} from './utils/map-entry/map-entry';

describe('clear', function () {
    it('should empty the map', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 1);
        map.put(3, 2);
        map.clear();
        expect(map.size()).toEqual(0);
    });
});

describe('compute', function () {
    it('should compute not null', function () {
        let map: Map<number, string> = new Map<number, string>();
        map.put(1, 'first');
        map.put(2, 'second');
        map.compute(1, new BiFunction<number, string, string>((key: number, v: string) => (v === null) ? 'value was null' : v.concat(' was computed')));
        expect(map.get(1)).toEqual('first was computed');
    });

    it('should compute null', function () {
        let map: Map<number, string> = new Map<number, string>();
        map.put(1, 'first');
        map.put(2, null);
        map.compute(2, new BiFunction<number, string, string>((key: number, v: string) => (v === null) ? 'value was null' : v.concat(' was computed')));
        expect(map.get(2)).toEqual('value was null');
    });

    it('should remove the value', function () {
        let map: Map<number, string> = new Map<number, string>();
        map.put(1, 'first');
        map.put(2, 'second');
        map.compute(1, new BiFunction<number, string, string>((key: number, v: string) => null));
        expect(map.get(1)).toEqual(null);
    });

    it('should return null', function () {
        let map: Map<number, string> = new Map<number, string>();
        map.put(1, null);
        map.compute(1, new BiFunction<number, string, string>((key: number, v: string) => null));
        expect(map.get(1)).toEqual(null);
    });
});

describe('computeIfAbsent', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, 3);
        expect(() => map.computeIfAbsent(null, new Function<number, number>((v: number) => v * 2))).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.computeIfAbsent(undefined, new Function<number, number>((v: number) => v * 2))).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should compute', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, null);
        map.computeIfAbsent(3, new Function<number, number>((v: number) => 3));
        expect(map.get(3)).toEqual(3);
    });

    it('should not compute', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, 3);
        map.computeIfAbsent(3, new Function<number, number>((v: number) => 10));
        expect(map.get(3)).toEqual(3);
    });

    it('should return null', function () {
        let map: Map<number, string> = new Map<number, string>();
        map.put(1, null);
        map.computeIfAbsent(3, new Function<number, string>((v: number) => null));
        expect(map.get(1)).toEqual(null);
    });
});

describe('computeIfPresent', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, 3);
        expect(() => map.computeIfPresent(null, new BiFunction<number, number, number>((k: number, v: number) => v * 2))).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.computeIfPresent(undefined, new BiFunction<number, number, number>((k: number, v: number) => v * 2))).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should not compute', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, null);
        map.computeIfPresent(3, new BiFunction<number, number, number>((k: number, v: number) => 3));
        expect(map.get(3)).toEqual(null);
    });

    it('should compute', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, 3);
        map.computeIfPresent(3, new BiFunction<number, number, number>((v: number) => 10));
        expect(map.get(3)).toEqual(10);
    });

    it('should return null', function () {
        let map: Map<number, string> = new Map<number, string>();
        map.put(1, 'a');
        map.computeIfPresent(1, new BiFunction<number, string, string>((key: number, v: string) => null));
        expect(map.get(1)).toEqual(null);
    });
});

describe('containsKey', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.containsKey(null)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.containsKey(undefined)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should be true', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.containsKey(1)).toBe(true);
    });

    it('should be false', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(map.containsKey(1)).toBe(false);
    });
});

describe('containsValue', function () {
    it('should throw a NullReferenceException if value is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.containsValue(null)).toThrow(new NullReferenceException('The value cannot be null nor undefined'));
        expect(() => map.containsValue(undefined)).toThrow(new NullReferenceException('The value cannot be null nor undefined'));
    });

    it('should be true', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.containsValue(1)).toBe(true);
    });

    it('should be false', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(map.containsValue(1)).toBe(false);
    });
});

describe('entrySet', function () {
    it('should contain all map entries', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        expect(map.entrySet().toArray()).toContain(new MapEntry<number, number>(1, 1));
        expect(map.entrySet().toArray()).toContain(new MapEntry<number, number>(2, 2));
    });
});

describe('equals', function () {
    it('should be true', function () {
        let a: Map<number, number> = new Map<number, number>();
        a.put(1, 1);
        a.put(2, 2);

        let b: Map<number, number> = new Map<number, number>();
        b.put(1, 1);
        b.put(2, 2);

        expect(b.equals(a)).toBe(true);
    });

    it('should be false', function () {
        let a: Map<number, number> = new Map<number, number>();
        a.put(1, 1);
        a.put(2, 2);

        let b: Map<number, number> = new Map<number, number>();
        b.put(1, 1);
        b.put(2, 3);

        expect(b.equals(a)).toBe(false);
    });
});

describe('forEach', function () {
    it('should double each element', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, 3);
        map.forEach(new Function<MapEntry<number, number>, MapEntry<number, number>>((m: MapEntry<number, number>) => {
            m.setValue(m.getValue() * 2);
            return m;
        }));
        expect(map.values()).toContain(2);
        expect(map.values()).toContain(4);
        expect(map.values()).toContain(6);
    });
});

describe('get', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.get(null)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.get(undefined)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should return 1', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.get(1)).toEqual(1);
    });
});

describe('getOrDefault', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.getOrDefault(null, 0)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.getOrDefault(undefined, 0)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should get', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.getOrDefault(1, 0)).toEqual(1);
    });

    it('should default', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(map.getOrDefault(1, 0)).toEqual(0);
    });
});

describe('hashCode of int', function () {
    it('should be the same', function () {
        let a: Map<number, number> = new Map<number, number>();
        a.put(1, 1);

        let b: Map<number, number> = new Map<number, number>();
        b.put(1, 1);

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: Map<number, number> = new Map<number, number>();
        a.put(1, 1);

        let b: Map<number, number> = new Map<number, number>();
        b.put(1, 2);

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
        let a: Map<number, A> = new Map<number, A>();
        a.put(1, new A(1, 'a'));

        let b: Map<number, A> = new Map<number, A>();
        b.put(1, new A(1, 'a'));

        expect(a.hashCode()).toEqual(b.hashCode());
    });

    it('should be different', function () {
        let a: Map<number, A> = new Map<number, A>();
        a.put(1, new A(1, 'a'));

        let b: Map<number, A> = new Map<number, A>();
        b.put(1, new A(1, 'b'));

        expect(a.hashCode()).not.toEqual(b.hashCode());
    });
});

describe('isEmpty', function () {
    it('should be true', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(map.isEmpty()).toBe(true);
    });

    it('should be false', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.isEmpty()).toBe(false);
    });
});

describe('keySet', function () {
    it('should contains all keys', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        expect(map.keySet().toArray()).toContain(1);
        expect(map.keySet().toArray()).toContain(2);
    });
});

describe('merge', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.merge(null, 1, new BiFunction<number, number, number>((t: number, u: number) => 0))).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.merge(undefined, 1, new BiFunction<number, number, number>((t: number, u: number) => 0))).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should add value if key is not associated', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.merge(1, 1, new BiFunction<number, number, number>((t: number, u: number) => 0));
        expect(map.get(1)).toEqual(1);
    });

    it('should add value if key is associated with null', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, null);
        map.merge(1, 1, new BiFunction<number, number, number>((t: number, u: number) => 0));
        expect(map.get(1)).toEqual(1);
    });

    it('should replace the non-null value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.merge(1, 1, new BiFunction<number, number, number>((t: number, u: number) => 2));
        expect(map.get(1)).toEqual(2);
    });

    it('should remove the null value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.merge(1, 1, new BiFunction<number, number, number>((t: number, u: number) => null));
        expect(map.get(1)).toEqual(null);
    });
});

describe('put', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.put(null, 0)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.put(undefined, 0)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should replace existing value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(1, 2);
        expect(map.get(1)).toEqual(2);
    });

    it('should return the previous value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.put(1, 2)).toEqual(1);
    });
});

describe('putAll', function () {
    it('should contains every entries', function () {
        let a: Map<number, number> = new Map<number, number>();
        a.put(1, 1);
        a.put(2, 2);
        a.put(3, 3);
        a.put(4, 4);

        let b: Map<number, number> = new Map<number, number>();
        b.putAll(a);
        expect(a.values()).toContain(1);
        expect(a.values()).toContain(2);
        expect(a.values()).toContain(3);
        expect(a.values()).toContain(4);
    });
});

describe('putIfAbsent', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.putIfAbsent(null, 0)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.putIfAbsent(undefined, 0)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should put the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.putIfAbsent(1, 1);
        expect(map.get(1)).toEqual(1);
    });

    it('should not put the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.putIfAbsent(1, 1);
        map.putIfAbsent(1, 2);
        expect(map.get(1)).not.toEqual(2);
    });
});

describe('remove(key)', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.remove(null)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.remove(undefined)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should remove the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.remove(1);
        expect(map.get(1)).not.toEqual(1);
    });

    it('should return the old value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.remove(1)).not.toEqual(1);
    });
});

describe('remove(key, value)', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.remove(null, 1)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.remove(undefined, 1)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should remove the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.remove(1, 1);
        expect(map.get(1)).not.toEqual(1);
    });

    it('should not remove the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.remove(1, 2);
        expect(map.get(1)).toEqual(1);
    });

    it('should be true', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.remove(1, 1)).toBe(true);
    });
});

describe('replace(key, newValue)', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.replace(null, 1)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.replace(undefined, 1)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should relpace the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.replace(1, 2);
        expect(map.get(1)).toEqual(2);
    });

    it('should return the old value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.replace(1, 2)).toEqual(1);
    });

    it('should return null', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.replace(2, 2)).toEqual(null);
    });
});

describe('replace(key, oldValue, newValue', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.replace(null, 1, 2)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
        expect(() => map.replace(undefined, 1, 2)).toThrow(new NullReferenceException('The key cannot be null nor undefined'));
    });

    it('should replace the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.replace(1, 1, 2);
        expect(map.get(1)).toEqual(2);
    });

    it('should return true', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.replace(1, 1, 2)).toBe(true);
    });

    it('should not replace the value', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.replace(1, 2, 3);
        expect(map.get(1)).toEqual(1);
    });

    it('should return false', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        expect(map.replace(1, 2, 3)).toBe(false);
    });
});

describe('replaceAll', function () {
    it('should throw a NullReferenceException if key is null or undefined', function () {
        let map: Map<number, number> = new Map<number, number>();
        expect(() => map.replaceAll(null)).toThrow(new NullReferenceException('The function cannot be null nor undefined'));
        expect(() => map.replaceAll(undefined)).toThrow(new NullReferenceException('The function cannot be null nor undefined'));
    });

    it('should double all values', function () {
        let map: Map<number, number> = new Map<number, number>();
        map.put(1, 1);
        map.put(2, 2);
        map.put(3, 3);
        map.put(4, 4);
        map.replaceAll(new BiFunction<number, number, number>((k: number, v: number) => v * 2));
        expect(map.values()).toContain(2);
        expect(map.values()).toContain(4);
        expect(map.values()).toContain(6);
        expect(map.values()).toContain(8);
    });
});