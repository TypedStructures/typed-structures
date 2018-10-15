import {Node} from './node';

describe('hasNext', function () {
    it('should be true', function () {
        let first: Node<number> = new Node<number>(1);
        let second: Node<number> = new Node<number>(2);
        first.next = second;

        expect(first.hasNext()).toBe(true);
    });

    it('should be false', function () {
        let first: Node<number> = new Node<number>(1);
        expect(first.hasNext()).toBe(false);
        first.next = null;
        expect(first.hasNext()).toBe(false);
    });
});

describe('hasPrevious', function () {

    it('should be true', function () {
        let first: Node<number> = new Node<number>(1);
        let second: Node<number> = new Node<number>(2);
        first.previous = second;

        expect(first.hasPrevious()).toBe(true);
    });

    it('should be false', function () {
        let first: Node<number> = new Node<number>(1);
        expect(first.hasPrevious()).toBe(false);
        first.previous = null;
        expect(first.hasPrevious()).toBe(false);
    });
});

describe('data', function () {
    it('should return 1', function () {
        let node: Node<number> = new Node<number>(1);
        expect(node.data).toEqual(1);
    });

    it('should set 2', function () {
        let node: Node<number> = new Node<number>(1);
        node.data = 2
        expect(node.data).toEqual(2);
    });
});

describe('get next', function () {
    it('should return second', function () {
        let first: Node<number> = new Node<number>(1);
        let second: Node<number> = new Node<number>(2);
        first.next = second;
        expect(first.next).toEqual(second);
    });
});

describe('get previous', function () {
    it('should return second', function () {
        let first: Node<number> = new Node<number>(1);
        let second: Node<number> = new Node<number>(2);
        second.previous = first;
        expect(second.previous).toEqual(first);
    });
});