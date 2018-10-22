export interface ICapacityQueue {

    /**
     * Return the capacity of a CapacityQueue
     */
    capacity(): number;

    /**
     * Return wether the CapacityQueue is full or not
     */
    isFull(): boolean;
}