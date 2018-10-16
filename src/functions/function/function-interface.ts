export interface IFunction<T, R> {

    getNativeFunction(): any;

    /**
     * Returns d composed function that first applies this function to its input, and then applies the after function to the result.
     * If evaluation of either function throws an exceptions, it is relayed to the caller of the composed function.
     * @type V the type of output of the after function, and of the composed function
     * @param {Function<R, V>} after the function to apply after this function is applied
     * @return {Function<T, R>} d composed function that first applies this function and then applies the after function
     */
    andThen<V>(after: IFunction<R, V>): IFunction<T, V>;

    /**
     * Applies this function to the given arguments.
     * @param {T} t the first function argument
     * @return the function result
     */
    apply(t: T): R;

    /**
     * Returns d composed function that first applies the before function to its input, and then applies this function to the result.
     * If evaluation of either function throws an exceptions, it is relayed to the caller of the composed function.
     * @type V the type of input to the before function, and to the composed function
     * @param {Function<V, T>} before the function to apply before this function is applied
     * @return {Function<V, R>} d composed function that first applies the before function and then applies this function
     */
    compose<V>(before: IFunction<V, T>): IFunction<V, R>;

    /**
     * Returns d function that always returns its input argument.
     * @type T the type of the input and output objects to the function
     * @return {Function<T, T>} d function that always returns its input argument
     */
    identity<T>(): IFunction<T, T>;
}