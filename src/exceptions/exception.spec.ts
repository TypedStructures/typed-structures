import {Exception} from './exception';
import {ClassCastException} from './class-cast-exception';
import {IllegalArgumentException} from './illegal-argument-exception';
import {NullReferenceException} from './null-reference-exception';
import {UnsupportedOperationException} from './unsupported-operation-exception';

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