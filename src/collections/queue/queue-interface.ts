export interface IQueue<T> {

    /**
     * return the length of a Queue
     * @returns queue size
     */
    length(): number;
    /**
     * Add an item to the end of a Queue
     * @param item item to enqueue
     */
    enqueue(item: T): void;

    /**
     * Remove an item from the Queue
     * @returns{T} item dequeued
     */
    dequeue(): T

    /**
     * Return the item at the beginning of the Queue without removing it
     * @returns{T} the item at the beginning
     */
    peek(): T;

    /**
     * Return the item at the end of the Queue without removing it
     * @returns{T} the item at the end
     */
    back(): T;

    /**
     * Return wether the queue is empty or not
     */
    empty(): boolean;

}