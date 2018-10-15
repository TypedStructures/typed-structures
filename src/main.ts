import { Queue } from './queue/queue';

let queue = new Queue<number>();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
console.log(queue.peek());
console.log(queue);