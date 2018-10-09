import {SinglyLinkedList} from './singly-linked-list';

describe('new SinglyLinkedList', function () {
    it('should be empty', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.length()).toEqual(0);
    });
});

describe('length of one element long list', function () {
    it('should be 1', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.length()).toBe(1);
    });

    it('length of 3 elements long list should be 3', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        list.push(2);
        list.push(3);
        expect(list.length()).toBe(3);
    });
});

describe('empty on a list', function () {
    it('should be true', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        expect(list.empty()).toBe(true);
    });

    it('should be false', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.empty()).toBe(false);
    });
});

describe('unshift', function () {
   it('should work when empty', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
       expect(list.unshift(5)).toEqual(1);
       expect(list.length()).toEqual(1);
       expect(list.pop()).toEqual(5);
   });

    it('should work when not empty', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(3);
        expect(list.unshift(5)).toEqual(2);
        expect(list.length()).toEqual(2);
        expect(list.shift()).toEqual(5);
    });
});

describe('shift', function () {
   it('should be undefined', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
       expect(list.shift()).toBe(undefined);
   });

    it('should be 1', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.push(1);
        expect(list.shift()).toEqual(1);
    });

    it('should be 2', function () {
        let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
        list.unshift(1);
        list.unshift(2);
        expect(list.shift()).toEqual(2);
    });
});

describe('push', function () {
   it('should be 1 element long', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
       list.push(1);
       expect(list.length()).toEqual(1);
   });

   it('should be 2 elements long', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
       list.push(1);
       list.push(2);
       expect(list.length()).toEqual(2);
   });
});

describe('pop', function () {
   it('should be 1', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
       list.push(1);
       expect(list.length()).toBe(1);
   });

   it('should be 2', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
       list.push(1);
       list.push(2);
       expect(list.pop()).toEqual(2);
   });
});

describe('first element after remove', function () {
   it ('should be 2', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
       list.push(1);
       list.push(2);
       list.remove(1);
       expect(list.pop()).toEqual(2);
   });
});

describe('every elements', function () {
   it('should be 2', function () {
       let list: SinglyLinkedList<any> = new SinglyLinkedList<any>();
   });
});