import {IFunction} from './function-interface';

export class Function<T, R> implements IFunction<T, R> {

    // Cannot type this one as Native Function because this class redifines it
    private _function: any;

    constructor(f: (t: T) => R) {
        this._function = f;
    }

    getNativeFunction() {
        return this._function;
    }

    andThen<V>(after: IFunction<R, V>): IFunction<T, V> {
        return new Function<T, V>(
            (t: T) => {
                return after.getNativeFunction()(this.getNativeFunction()(t));
            }
        );
    }

    apply(t: T): R {
        return this._function(t);
    }

    compose<V>(before: IFunction<V, T>): IFunction<V, R> {
        return new Function<V, R>(
            (t: V) => {
                return this.getNativeFunction()(before.getNativeFunction()(t));
            }
        );
    }

    identity<T>(): IFunction<T, T> {
        return new Function<T, T>((t: T) => t);
    }
}