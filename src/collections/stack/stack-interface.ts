export interface IStack<T> {

    /**
     * return the length of a Stack
     * @returns stack size
     */
    length(): number;
    /**
     * Add an item to the top of a Stack
     * @param item item to stack
     */
    stack(item: T): void;

    /**
     * Remove an item from the stack
     * @returns{T} item to unstack
     */
    unstack(): T

    /**
     * Return the top stacked element
     * @returns{T} the item at the beginning
     */
    peek(): T;

    /**
     * Return wether the stack is empty or not
     */
    empty(): boolean;

}