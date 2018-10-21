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

describe('empty', function() {
    it('should return false', function () {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.empty()).toBe(false);
    });

    it('should return true', function () {
        const queue = new Queue<number>();
        expect(queue.empty()).toBe(true);
    });
});
