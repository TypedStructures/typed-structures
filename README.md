
![TypedStructures](./images/TypedStructures.png)

# TypedStructures

TypeScript implementation of d simple set of data structures.

## TypedStructures list

 - [ ] Singly linked list
 - [ ] Doubly linked list
 - [x] Map
 - [ ] Stack
 - [ ] Queue
 - [ ] Binary tree
 - [ ] Binary search tree
 - [ ] Heap
 - [ ] Graph
 - [ ] Matrix

### Singly linked list

```ts
```

### Doubly linked list

```ts
```
### Map
```ts
import { Map } from 'src/map/map'
import {BiFunction} from 'src/biFunction/biFunction';
import {Function} from 'src/function/function';


let map: Map<number, string> = new Map<number, string>();
map.put(1, 'first');
map.put(2, 'second');
map.compute(1, new BiFunction<number, string, string>((key: number, v: string) => (v === null) ? 'value was null' : v.concat(' was computed')));
map.get(1);
// 'first was computed'


let map: Map<number, number> = new Map<number, number>();
map.put(1, 1);
map.put(2, 2);
map.put(3, null);
map.computeIfAbsent(3, new Function<number, number>((v: number) => 3));
map.get(3);
// 3


let map: Map<number, number> = new Map<number, number>();
map.put(1, 1);
map.put(2, 2);
map.put(3, 3);
map.computeIfPresent(3, new BiFunction<number, number, number>((v: number) => 10));
map.get(3);
// 10


let map: Map<number, number> = new Map<number, number>();
map.put(1, 1);
map.containsKey(1);
// true


let map: Map<number, number> = new Map<number, number>();
map.put(1, 1);
map.containsValue(1);
// true


let a: Map<number, number> = new Map<number, number>();
a.put(1, 1);
a.put(2, 2);

let b: Map<number, number> = new Map<number, number>();
b.put(1, 1);
b.put(2, 2);

b.equals(a);
// true

a.equals(b);
// true

let map: Map<number, number> = new Map<number, number>();
map.put(1, 1);
map.put(2, 2);
map.put(3, 3);
map.forEach(new Function<MapEntry<number, number>, MapEntry<number, number>>((m: MapEntry<number, number>) => {
    m.setValue(m.getValue() * 2);
    return m;
map.values();
// [2, 4, 6]


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

let a: Map<number, A> = new Map<number, A>();
a.put(1, new A(1, 'a'));

let b: Map<number, A> = new Map<number, A>();
b.put(1, new A(1, 'a'));

a.hashCode(); // 018306a
b.hashCode(); // 018306a


let map: Map<number, number> = new Map<number, number>();
map.put(1, 1);
map.merge(1, 1, new BiFunction<number, number, number>((t: number, u: number) => null));
map.get(1); //null
map.merge(1, 1, new BiFunction<number, number, number>((t: number, u: number) => 0));
map.get(1); // 1


let a: Map<number, number> = new Map<number, number>();
a.put(1, 1);
a.put(2, 2);
a.put(3, 3);
a.put(4, 4);

let b: Map<number, number> = new Map<number, number>();
b.putAll(a);
a.values(); // [1, 2, 3, 4]
```
