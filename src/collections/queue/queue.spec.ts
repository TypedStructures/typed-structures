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

describe('back', function () {
    it('should return 1', function () {
        let list: Queue<number> = new Queue<number>();
        list.enqueue(1);
        expect(list.back()).toEqual(1);
    });
    it('should return 2', function () {
        let list: Queue<number> = new Queue<number>();
        list.enqueue(1);
        list.enqueue(2);
        expect(list.back()).toEqual(2);
    });
    it('should return 2', function () {
        let list: Queue<number> = new Queue<number>();
        list.enqueue(1);
        list.enqueue(2);
        list.dequeue();
        expect(list.back()).toEqual(2);
    });
});
