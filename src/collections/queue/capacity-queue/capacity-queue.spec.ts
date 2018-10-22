import { CapacityQueue } from "./capacity-queue";
import { CapacityFullException } from "../../../exceptions/capacity-full-exception";

describe('enqueue', function() {
    it('should enqueue 1 element', function () {
        const queue = new CapacityQueue<number>(3);
        queue.enqueue(1);
        expect(queue.length()).toEqual(1);
        expect(queue.isFull()).toBe(false);

    });
    it('should enqueue 2 element', function () {
        const queue = new CapacityQueue<number>(3);
        queue.enqueue(1);
        queue.enqueue(1);
        expect(queue.length()).toEqual(2);
        expect(queue.isFull()).toBe(false);
    });
    it('should return CapacityFullException', function () {
        const queue = new CapacityQueue<number>(3);
        queue.enqueue(1);
        queue.enqueue(1);
        queue.enqueue(1);
        expect( () => queue.enqueue(1)).toThrow(new CapacityFullException('Capacity Full'));
        expect(queue.isFull()).toBe(true);

    });
});

describe('capacity', function() {
    it('should return capacity', function () {
        const queue = new CapacityQueue<number>(3);
        expect(queue.capacity()).toEqual(3);
    });
});

describe('is full', function() {
    it('should be full', function () {
        const queue = new CapacityQueue<number>(3);
        queue.enqueue(1);
        queue.enqueue(1);
        queue.enqueue(1);
        expect(queue.length()).toEqual(3);
        expect(queue.isFull()).toBe(true);

    });
});