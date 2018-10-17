import { SinglyLinkedList } from './singly-linked-list';
import { Node } from '../utils/node/node';

describe('new SinglyLinkedList', function () {
    it('should be empty', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.length()).toEqual(0);
    });
});

describe('empty of SinglyLinkedList', function () {
    it('should be true', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.empty()).toBe(true);
    });

    it('should be true', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.empty()).toBe(false);
    });
});

describe('size of SinglyLinkedList', function () {
    it('should be 0', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.length()).toEqual(0);
    });

    it('should be 1', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.length()).toEqual(1);
    });

    it('should be 2', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        list.unshift(1);
        expect(list.length()).toEqual(2);
    });
});

describe('unshift', function () {
    it('should add to the beginning when empty', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.unshift(1)).toEqual(1);
        expect(list.length()).toEqual(1);
        expect(list.pop()).toEqual(1);
    });

    it('should add to the beginning when not empty', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(5);
        expect(list.unshift(1)).toEqual(2);
        expect(list.length()).toEqual(2);
        expect(list.shift()).toEqual(1);
    });

    it('should return 0', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.unshift(undefined)).toEqual(0);
    });
});

describe('push', function () {
    it('should add to the end when empty', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.length()).toEqual(1);
    });

    it('should add to the end when not empty', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        list.push(2);
        expect(list.length()).toEqual(2);
        expect(list.pop()).toEqual(2);
    });
});

describe('shift', function () {
    it('should be undefined', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.shift()).toEqual(undefined);
    });

    it('should remove the first element', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.shift()).toEqual(1);
        list.unshift(2);
        expect(list.shift()).toEqual(2);
    });
});

describe('pop', function () {
    it('should be undefined', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.pop()).toEqual(undefined);
    });

    it('should remove the last element', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.pop()).toEqual(1);
        list.push(2);
        expect(list.pop()).toEqual(2);
    });
});

describe('remove', function () {
    it('should return undefined', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.empty()).toBe(true);
        expect(list.remove(1)).toEqual(undefined);
    });

    it('should return the removed element whe size 1', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.remove(1)).toEqual(1);
    });

    it('should return the removed element whe size 2', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        list.push(2);
        expect(list.remove(1)).toEqual(1);
    });

    it('should remove the third element', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        expect(list.remove(3)).toEqual(3);
        expect(list.contains(3)).not.toBe(true);
    });
});

describe('contains', function () {
    it('should be true', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(1);
        expect(list.contains(1)).toBe(true);
    });

    it('should be false', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        expect(list.contains(1)).toBe(false);
    });
});

describe('peek', function () {
    it('should return 1', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(1);
        expect(list.peek()).toEqual(1);
    });

    it('should contain 1', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(1);
        list.peek();
        expect(list.contains(1)).toBe(true);
    });
});

describe('clear', function () {
    it('should empty the list', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.clear();
        expect(list.empty()).toBe(true);
    });
});

describe('filter', function () {
    it('should contains 1, 2, 3', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);
        list = list.filter((x: number) => x === 3);

        // expect(list.contains(1)).toBe(true);
        // expect(list.contains(2)).toBe(true);
        expect(list.contains(3)).toBe(true);
        expect(list.contains(4)).toBe(false);
        expect(list.contains(5)).toBe(false);
    });
});

describe('includes', function () {
    it('should be true', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.includes(1)).toBe(true);
    });

    it('should be false', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(1);
        expect(list.includes(2)).toBe(false);
    });
});

describe('find', function () {
    it('should be a Node containing 4', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(3);
        list.push(4);
        list.push(5);
        expect(list.find(4).data).toEqual(4);
    });

    it('should be undefined', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(3);
        list.push(4);
        list.push(5);
        expect(list.find(6)).toBeUndefined();
    });
});

describe('indexOf', function () {
    it('should be -1', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(3);
        list.push(4);
        list.push(5);
        expect(list.indexOf(6)).toEqual(-1);
    });

    it('should be 2', function () {
        let list: SinglyLinkedList<number> = new SinglyLinkedList<number>();
        list.push(3);
        list.push(4);
        list.push(5);
        expect(list.indexOf(5)).toEqual(2);
    });
});