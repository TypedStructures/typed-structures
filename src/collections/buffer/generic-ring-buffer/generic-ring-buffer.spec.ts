import {GenericRingBuffer} from './generic-ring-buffer';
import {IllegalArgumentException} from '../../../exceptions/illegal-argument-exception';

describe('get/put', function () {
    it('should ', function () {
        let b: GenericRingBuffer<number> = new GenericRingBuffer<number>(4, 3, 0, 0, 0);
        b.put(1);
        b.put(2);
        expect(b.get()).toEqual(1);
    });
});

describe('isReadOnly', function () {
    it('should be false', function () {
        let b: GenericRingBuffer<number> = new GenericRingBuffer<number>(4, 3, 3, 0, -1);
        expect(b.isReadOnly()).toBe(false);
    });
    it('should be true', function () {
        let b: GenericRingBuffer<number> = new GenericRingBuffer<number>(4, 3, 3, 0, -1, true);
        expect(b.isReadOnly()).toBe(true);
    });
});

describe('readPosition', function () {
    it('should throw an exception', function () {
        let b: GenericRingBuffer<number> = new GenericRingBuffer<number>(4, 3, 3, 0, -1, true);
        expect(() => b.readPosition(-1)).toThrow(new IllegalArgumentException ('New read position out of bound'));
        expect(() => b.readPosition(4)).toThrow(new IllegalArgumentException ('New read position out of bound'));
    });
});