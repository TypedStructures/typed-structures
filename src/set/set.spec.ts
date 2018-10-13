import {Set} from './set';

describe('new Set', function () {
    it('should be empty', function () {
        let set: Set<number> = new Set<number>();
        expect(set.size()).toBe(0);
    });
});