export interface Function<T, R> {

    /**
     * Returns a composed function that first applies this function to its input, and then applies the after function to the result.
     * If evaluation of either function throws an exception, it is relayed to the caller of the composed function.
     * @type V the type of output of the after function, and of the composed function
     * @param {Function<R, V>} after the function to apply after this function is applied
     * @return {Function<T, R>} a composed function that first applies this function and then applies the after function
     */
    andThen<V>(after: Function<R, V>): Function<T, R>;

    /**
     * Applies this function to the given arguments.
     * @param {T} t the first function argument
     * @return the function result
     */
    apply(t: T): void;

    /**
     * Returns a composed function that first applies the before function to its input, and then applies this function to the result.
     * If evaluation of either function throws an exception, it is relayed to the caller of the composed function.
     * @type V the type of input to the before function, and to the composed function
     * @param {Function<V, T>} before the function to apply before this function is applied
     * @return {Function<V, R>} a composed function that first applies the before function and then applies this function
     */
    compose<V>(before: Function<V, T>): Function<V, R>;

    /**
     * Returns a function that always returns its input argument.
     * @type T the type of the input and output objects to the function
     * @return {Function<T, T>} a function that always returns its input argument
     */
    identity<T>(): Function<T, T>;
}