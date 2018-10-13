import {FunctionInterface} from './functionInterface';

export class Function<T, R> implements FunctionInterface<T, R> {

    // Cannot type this one as Native Function because this class redifines it
    private _function: any;

    constructor(f: (t: T) => R) {
        this._function = f;
    }

    getNativeFunction() {
        return this._function;
    }

    andThen<V>(after: FunctionInterface<R, V>): FunctionInterface<T, V> {
        return new Function<T, V>(
            (t: T) => {
                return after.getNativeFunction()(this.getNativeFunction()(t));
            }
        );
    }

    apply(t: T): R {
        return this._function(t);
    }

    compose<V>(before: FunctionInterface<V, T>): FunctionInterface<V, R> {
        return new Function<V, R>(
            (t: V) => {
                return this.getNativeFunction()(before.getNativeFunction()(t));
            }
        );
    }

    identity<T>(): FunctionInterface<T, T> {
        return new Function<T, T>((t: T) => t);
    }
}