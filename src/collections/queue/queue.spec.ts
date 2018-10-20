import { Queue } from './queue';

describe('enqueue', function() {
    it('should enqueue 1 element', function () {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.length()).toEqual(1);
    });
    it('should enqueue 2 element', function () {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(1);
        expect(queue.length()).toEqual(2);
    });
});

describe('dequeue', function() {
    it('should enqueue 1 element', function () {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.length()).toEqual(0);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.length()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.length()).toEqual(0);
    });
});

describe('dequeue', function() {
    it('should enqueue 1 element', function () {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.peek()).toEqual(1);
    });
});