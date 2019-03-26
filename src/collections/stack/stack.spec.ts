import { Stack } from './stack';

describe('stack', function() {
    it('should stack 1 element', function () {
        const stack = new Stack<number>();
        stack.stack(1);
        expect(stack.length()).toEqual(1);
    });
    it('should enstack 2 element', function () {
        const stack = new Stack<number>();
        stack.stack(1);
        stack.stack(1);
        expect(stack.length()).toEqual(2);
    });
});

describe('unstack', function() {
    it('should unstack 1 element', function () {
        const stack = new Stack<number>();
        stack.stack(1);
        expect(stack.unstack()).toEqual(1);
        expect(stack.length()).toEqual(0);
        stack.stack(1);
        stack.stack(2);
        expect(stack.unstack()).toEqual(2);
        expect(stack.length()).toEqual(1);
        expect(stack.unstack()).toEqual(1);
        expect(stack.length()).toEqual(0);
    });
});

describe('destack', function() {
    it('should enstack 1 element', function () {
        const stack = new Stack<number>();
        stack.stack(1);
        expect(stack.unstack()).toEqual(1);
    });
});

describe('empty', function() {
    it('should return false', function () {
        const queue = new Stack<number>();
        queue.stack(1);
        expect(queue.empty()).toBe(false);
    });

    it('should return true', function () {
        const queue = new Stack<number>();
        expect(queue.empty()).toBe(true);
    });
});

describe('peek', function () {
    it('should return 1', function () {
        let list: Stack<number> = new Stack<number>();
        list.stack(1);
        expect(list.peek()).toEqual(1);
    });
});