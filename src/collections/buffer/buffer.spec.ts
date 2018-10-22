import { GenericBuffer } from './generic-buffer/generic-buffer';
import {IllegalArgumentException} from '../../exceptions/illegal-argument-exception';
import {InvalidMarkException} from '../../exceptions/invalid-mark-exception';

describe('constructor', function () {
    it('should throw an exception', function () {
        expect(() => new GenericBuffer(-2, 0, 0, 0)).toThrow(new IllegalArgumentException ('Negative capacity'));
    });

    it('should throw an exception', function () {
        expect(() => new GenericBuffer(0, 0, 0, 2)).toThrow(new IllegalArgumentException ('Mark is greater than current position'));
    });

    it('should not throw an exception', function () {
        expect(() => new GenericBuffer(0, 0, 0, 0)).not.toThrow(new IllegalArgumentException ('Mark is greater than current position'));
    });
});

describe('capacity', function () {
    it('should return 2', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(2, 2, 0, 0);
        expect(b.capacity()).toEqual(2);
    });
});

describe('clear', function () {
    it('should clear', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(2, 1, 0, 0);
        b.clear();
        expect(b.limit()).toEqual(2);
        expect(b.position()).toEqual(0);
    });
});

describe('flip', function () {
    it('should flip', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(2, 1, 0, 0);
        b.flip();
        expect(b.limit()).toEqual(0);
        expect(b.position()).toEqual(0);
    });
});

describe('hasRemaining', function () {
    it('should be true', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(2, 2, 1, 0);
        expect(b.hasRemaining()).toBe(true);
    });
});

describe('limit', function () {
    it('should throw an exception', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(2, 2, 1, 0);
        expect(() => b.limit(-1)).toThrow(new IllegalArgumentException ('New limit out of bound'));
        expect(() => b.limit(3)).toThrow(new IllegalArgumentException ('New limit out of bound'));
    });

    it('should not throw an exception', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, 3);
        expect(() => b.limit(2)).not.toThrow(new IllegalArgumentException ('New limit out of bound'));
    });
});

describe('mark', function () {
    it('should return this', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, 3);
        expect(b.mark()).toEqual(b);
    });
});

describe('position', function () {
    it('should throw an exception', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, 3);
        expect(() => b.position(-1)).toThrow(new IllegalArgumentException ('New position out of bound'));
        expect(() => b.position(4)).toThrow(new IllegalArgumentException ('New position out of bound'));
    });
    it('should return this', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, 3);
        expect(b.position(3)).toEqual(b);
    });
});

describe('reset', function () {
    it('should throw an exception', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, -1);
        expect(() => b.reset()).toThrow(new InvalidMarkException());
    });
    it('should set position', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, 1);
        b.reset();
        expect(b.position()).toEqual(1);
    });
});

describe('rewind', function () {
    it('should set position', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, -1);
        b.rewind();
        expect(b.position()).toEqual(0);
    });
    it('should return this', function () {
        let b: GenericBuffer<number> = new GenericBuffer<number>(4, 3, 3, -1);
        expect(b.rewind()).toEqual(b);
    });
});