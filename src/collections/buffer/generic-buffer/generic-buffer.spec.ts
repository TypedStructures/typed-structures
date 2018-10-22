import {GenericBuffer} from './generic-buffer';

describe('get/put', function () {
    it('should ', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 0, 0);
        b.put(1);
        b.put(2);
        b.position(0);
        expect(b.get()).toEqual(1);
    });
});

describe('isReadOnly', function () {
    it('should be false', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, -1);
        expect(b.isReadOnly()).toBe(false);
    });
    it('should be true', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, -1, true);
        expect(b.isReadOnly()).toBe(true);
    });
});