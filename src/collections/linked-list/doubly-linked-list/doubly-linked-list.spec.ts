import { DoublyLinkedList } from '../../linked-list/doubly-linked-list/doubly-linked-list';

describe('new DoublyLinkedList', function () {
    it('should be empty', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.length()).toEqual(0);
    });
});

describe('empty of DoublyLinkedList', function () {
    it('should be true', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.empty()).toBe(true);
    });

    it('should be true', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        expect(list.empty()).toBe(false);
    });
});

describe('size of DoublyLinkedList', function () {
    it('should be 0', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.length()).toEqual(0);
    });

    it('should be 1', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        expect(list.length()).toEqual(1);
    });

    it('should be 2', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        list.unshift(1);
        expect(list.length()).toEqual(2);
    });
});

describe('unshift', function () {
    it('should return undefined', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.unshift(undefined)).toEqual(0);
    });

    it('should add to the beginning when empty', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.unshift(1)).toEqual(1);
        expect(list.length()).toEqual(1);
        expect(list.pop()).toEqual(1);
    });

    it('should add to the beginning when not empty', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(5);
        expect(list.unshift(1)).toEqual(2);
        expect(list.length()).toEqual(2);
        expect(list.shift()).toEqual(1);
    });
});

describe('push', function () {
    it('should add to the end when empty', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        expect(list.length()).toEqual(1);
    });

    it('should add to the end when not empty', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        list.push(2);
        expect(list.length()).toEqual(2);
        expect(list.pop()).toEqual(2);
    });
});

describe('shift', function () {
    it('should be undefined', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.shift()).toEqual(undefined);
    });

    it('should remove the first element', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        expect(list.shift()).toEqual(1);
        list.unshift(2);
        expect(list.shift()).toEqual(2);
    });
});

describe('pop', function () {
    it('should be undefined', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.pop()).toEqual(undefined);
    });

    it('should remove the last element', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        expect(list.pop()).toEqual(1);
        list.push(2);
        expect(list.pop()).toEqual(2);
    });
});

describe('remove', function () {
    it('should return undefined', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        expect(list.empty()).toBe(true);
        expect(list.remove(1)).toEqual(undefined);
    });

    it('should return the removed element whe size 1', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        expect(list.remove(1)).toEqual(1);
    });

    it('should return the removed element whe size 2', function () {
        let list: DoublyLinkedList<any> = new DoublyLinkedList<any>();
        list.push(1);
        list.push(2);
        expect(list.remove(1)).toEqual(1);
    });
});