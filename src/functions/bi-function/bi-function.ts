import {IBiFunction} from './bi-function-interface';
import {IFunction} from '../function/function-interface';

export class BiFunction<T, U, R> implements IBiFunction<T, U, R> {

    // Cannot type this one as Native Function because this class redifines it
    private _function: any;

    getNativeFunction() {
        return this._function;
    }

    constructor(f: (t: T, u: U) => R) {
        this._function = f;
    }

    andThen<V>(after: IFunction<R, V>): IBiFunction<T, U, R> {
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