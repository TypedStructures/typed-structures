import {BiFunctionInterface} from './biFunctionInterface';
import {FunctionInterface} from '../function/functionInterface';

export class BiFunction<T, U, R> implements BiFunctionInterface<T, U, R> {

    // Cannot type this one as Native Function because this class redifines it
    private _function: any;

    getNativeFunction() {
        return this._function;
    }

    constructor(f: (t: T, u: U) => R) {
        this._function = f;
    }

    andThen<V>(after: FunctionInterface<R, V>): BiFunctionInterface<T, U, R> {
        return new BiFunction<T, U, R>(
            (t: T, u: U) => {
                return after.getNativeFunction()(this.getNativeFunction()(t, u));
            }
        );
    }

    apply(t: T, u: U): R {
        return this._function(t, u);
    }

}