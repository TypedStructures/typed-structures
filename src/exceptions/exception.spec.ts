import { Exception } from '..';
import { ClassCastException } from '..';
import { IllegalArgumentException } from '..';
import { NullReferenceException } from '..';
import { UnsupportedOperationException } from '..';
import { IndexOutOfBoundsException } from '..';
import { InvalidMarkException } from '..';
import { ReadOnlyBufferException } from '..';
import {NoDecoratorException} from './no-decorator-exception';
import {NoSuchPropertyException} from './no-such-property-exception';

describe('exception', function () {
    it('should return the error', function () {
        let e = new Exception('error');
        expect(e.toString()).toEqual('Exception: error\n');
    });
});

describe('classCastException', function () {
    it('should return the error', function () {
        let e = new ClassCastException('error');
        expect(e.toString()).toEqual('ClassCastException: error\n');
    });
});

describe('illegalArgumentException', function () {
    it('should return the error', function () {
        let e = new IllegalArgumentException('error');
        expect(e.toString()).toEqual('IllegalArgumentException: error\n');
    });
});

describe('nullReferenceException', function () {
    it('should return the error', function () {
        let e = new NullReferenceException('error');
        expect(e.toString()).toEqual('NullReferenceException: error\n');
    });
});

describe('unsupportedOperationException', function () {
    it('should return the error', function () {
        let e = new UnsupportedOperationException('error');
        expect(e.toString()).toEqual('UnsupportedOperationException: error\n');
    });
});

describe('IndexOutOfBoundException', function () {
    it('should return the error', function () {
        let e = new IndexOutOfBoundsException('error');
        expect(e.toString()).toEqual('IndexOutOfBoundsException: error\n');
    });
});

describe('InvalidMarkException', function () {
    it('should return the error', function () {
        let e = new InvalidMarkException('error');
        expect(e.toString()).toEqual('InvalidMarkException: error\n');
    });
});

describe('IndexOutOfBoundException', function () {
    it('should return the error', function () {
        let e = new IndexOutOfBoundsException('error');
        expect(e.toString()).toEqual('IndexOutOfBoundsException: error\n');
    });
});

describe('ReadOnlyBufferException', function () {
    it('should return the error', function () {
        let e = new ReadOnlyBufferException('error');
        expect(e.toString()).toEqual('ReadOnlyBufferException: error\n');
    });
});

describe('NoDecoratorException', function () {
    it('should return the error', function () {
        let e = new NoDecoratorException('error');
        expect(e.toString()).toEqual('NoDecoratorException: error\n');
    });
});

describe('NoSuchPropertyException', function () {
    it('should return the error', function () {
        let e = new NoSuchPropertyException('error');
        expect(e.toString()).toEqual('NoSuchPropertyException: error\n');
    });
});