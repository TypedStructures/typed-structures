<p align="center">
  <a><img href="https://travis-ci.org/TypedStructures/typed-structures" src="https://travis-ci.org/TypedStructures/typed-structures.svg?branch=master" alt="Build Status"></a>
  <a href="https://codeclimate.com/github/TypedStructures/typed-structures/test_coverage"><img src="https://api.codeclimate.com/v1/badges/f3f520469906412ed5f0/test_coverage" /></a>
 <a href="https://codeclimate.com/github/TypedStructures/typed-structures/maintainability"><img src="https://api.codeclimate.com/v1/badges/f3f520469906412ed5f0/maintainability" /></a>
</p>

<h2 align="center">Typed Structures</h2>

Typed Structures is an MIT-licensed on-going open source project meant to bring a fullset of data structures to the awesome TypeScript 🎉

## How to install 
```bash
npm install typed-structures
```
  
## How to import
```javascript
import { Map } from 'typed-structures';
let map: Map<number, number> = new Map<number, number>();
map.put(1, 1);
map.containsKey(1);
// true
```

## Documentation 📝

Complete API available [here](https://typedstructures.github.io/typed-structures/).


## Structures (Examples) 📕📗📘

### Doubly linked list
Generic doubly linked list.

```typescript
import { DoublyLinkedList, Node, Queue } from 'typed-structures';
import { Track } from './track';
import { MixService } from './mix-service';

class Player {
    private playlist: DoublyLinkedList<Track> = new DoublyLinkedList<Track>();
    private mix: Queue<Track> = MixService.getMix();
    private currentTrack: Node<Track>;
    
    constructor() {
        this.playlist.push(this.mix.dequeue());
        this.currentTrack = new Node<Track>(this.playlist.peek());
    }
    
    onNextClick() {
        this.next();
    }
    
    onPreviousClick() {
        this.previous();
    }
    
    onTrackEnd() {
        this.next();
    }
    
    private next() {
        this.playlist.push(this.mix.dequeue());
        this.currentTrack = this.currentTrack.next();
    }
    
    private previous() {
        this.currentTrack = this.currentTrack.previous();
    }
}

```
### Map

Generic plain data map.

```typescript
import { Map, Stack } from 'typed-structures';
import { Task } from "./task";

let map: Map<string, Stack<Task>> = new Map<string, Stack<Task>>();

map.put('todo', new Stack<Task>());
map.put('in-progress', new Stack<Task>());
map.put('done', new Stack<Task>());

let firstTask: Task = new Task('Read the docs');
let todo: Stack<Task> = map.get('todo');
todo.stack(firstTask);
map.replace('todo', todo);

let inProgress: Stack<Task> = map.get('in-progress');
inProgress.stack(map.get('todo').unstack());
map.replace('in-progress', inProgress);

let done: Stack<Task> = map.get('done');
done.stack(map.get('in-progress').unstack());
map.replace('done', done);
```
### Set

Generic set.

```typescript
import { Set } from 'typed-structures';

let set: Set<string> = new Set<string>();

set.add('first');
set.add('second');

console.log(set.contains('first')); // true

for (let key of set.keys())
    console.log(key); // first, second
```
### Stack

Simple and generic stack. 

```typescript
import { Stack } from "typed-structures";
import { Task } from "./task";

let taskStack: Stack<Task> = new Stack<Task>();

taskStack.stack(new Task('taskName'));

console.log(taskStack.peek().name); // taskName

console.log(taskStack.empty()); // false

console.log(taskStack.length()); // 1

console.log(taskStack.unstack().name); //taskName

console.log(taskStack.empty()); // true
```

[Live example on CodeSandbox](https://codesandbox.io/s/zk6ro2w3j3?autoresize=1&fontsize=14)

### Queue

```typescript
import { Queue } from 'typed-structures';
import { Emiter } from './emiter';
import { Logger } from './logger';

let emiter1: Emiter = new Emiter();
let emiter2: Emiter = new Emiter();
let logger: Logger = new Logger();
let channel: Queue<string> = new Queue<string>();

channel.enqueue(emiter1.emit('Hi !'));
channel.enqueue((emiter2.emit('Hey, How are you doing ?')));
/* ... */

while (!channel.empty()) {
    logger.log(channel.dequeue());
}
```
### Binary tree

```typescript
import { BinaryTreeSearch } from 'typed-structures';

let tree: BinaryTreeSearch<string> = new BinaryTreeSearch<string>();

tree.add('Find me ^^');

console.log(tree.find(tree.root(), 'Find me ^^')); // Find me ^^
console.log(tree.find(tree.root(), '404')); // undefined
```
### Buffer

Generic buffer.

```typescript
import { GenericBuffer } from 'typed-structures';

let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 0, -1);

    b.put(1);
    b.put(2);

    b.rewind();

    console.log(b.get()); // 1
    console.log(b.get()); // 2
```
### RingBuffer

Generic ring buffer.

```typescript
import { GenericRingBuffer } from 'typed-structures';

let b: GenericRingBuffer<number> = new GenericRingBuffer<number>(4, 3, 0, 0, 0);
b.put(1);
b.put(2);

console.log(b.get()); // 1
```

### TsQ (LinQ inspired)
Minimalist implementation of .NET's LinQ for TypedStructures.

```typescript
import { TsQ, Set } from 'typed-structures';
import { Person } from './person';

let firstUnknown: Person = new Person(1, 'John', 'Doe', new Date('1970-01-01'));
let secondUnknown: Person = new Person(2, 'Jane', 'Doe', new Date('1970-01-02'));
let thirdUnknown: Person = new Person(3, 'Complete', 'Stranger', new Date('1970-01-03'));
let fourthUnknown: Person = new Person(4, 'Unidentified', 'Person', new Date('1970-01-04'));
let fifthUnknown: Person = new Person(5, 'Unnamed', 'Person', new Date('1970-01-04'));

let unknowns: Set<Person> = new Set<Person>();
unknowns.add(firstUnknown);
unknowns.add(secondUnknown);
unknowns.add(thirdUnknown);
unknowns.add(fourthUnknown);
unknowns.add(fifthUnknown);

TsQ.from(unknowns)
    .select("name")
    .where(e => e.name.length > 4)
    .order_by("id", "desc")
    .fetch();
    
TsQ.from(unknowns)
    .group_by("group")
    .fetch();

```
## Questions 💬

For questions and support feel free to open an issue

## Issues 🔎

See CONTRIBUTING.md

## Contribution 🛠

Feel free to contribute and enhance typed structures 🎉💛

## License

[MIT](http://opensource.org/licenses/MIT)

2018-present Anthony & Thibaud
 


