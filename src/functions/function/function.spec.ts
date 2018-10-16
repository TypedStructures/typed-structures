import {Function} from './function';

describe('andThen', function () {
    it('should add 1 then triple', function () {
        let addOne: Function<number, number> = new Function<number, number>((x: number) => x + 1);
        let triple: Function<number, number> = new Function<number, number>((x: number) => x * 3);
        let combined = addOne.andThen(triple);
        expect(combined.apply(2)).toEqual(9);
    });
});

describe('compose', function () {
    it('should triple then add 1', function () {
        let addOne: Function<number, number> = new Function<number, number>((x: number) => x + 1);
        let triple: Function<number, number> = new Function<number, number>((x: number) => x * 3);
        let combined = addOne.compose(triple);
        expect(combined.apply(2)).toEqual(7);
    });
});

describe('identity', function () {
    it('should return parameter', function () {
        let addOne: Function<number, number> = new Function<number, number>((x: number) => x + 1);
        expect(addOne.identity().apply(1)).toEqual(1);
    });
});