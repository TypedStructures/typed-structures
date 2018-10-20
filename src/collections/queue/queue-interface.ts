export interface IQueue<T> {
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
}