import { Function } from './';

export interface BiFunction<T, U, R> {

    /**
     * Returns a composed function that first applies this function to its input, and then applies the after function to the result.
     * If evaluation of either function throws an exception, it is relayed to the caller of the composed function.
     * @type V the type of output of the after function, and of the composed function
     * @param {Function<R, V>} after the function to apply after this function is applied
     * @return {BiFunction<T, U, R>} a composed function that first applies this function and then applies the after function
     */
    andThen<V>(after: Function<R, V>): BiFunction<T, U, R>;

    /**
     * Applies this function to the given arguments.
     * @param {T} t the first function argument
     * @param {U} u the second function argument
     * @return the function result
     */
    apply(t: T, u: U): void;
}