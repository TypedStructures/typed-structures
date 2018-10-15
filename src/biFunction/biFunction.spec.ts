import {BiFunction} from './biFunction';
import {Function} from '../function/function';

describe('andThen', function () {
    it('should add then square', function () {
        let add: BiFunction<number, number, number> = new BiFunction<number, number, number>((x: number, y: number) => x + y);
        let square: Function<number, number> = new Function<number, number>((x: number) => x * x);
        let combined = add.andThen(square);
        expect(combined.apply(2, 3)).toEqual(25);
    });
});