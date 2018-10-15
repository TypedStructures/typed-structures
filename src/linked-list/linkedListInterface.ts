import { Node } from './node';

export interface LinkedListInterface<T> {

    /**
     * Returns the number of nodes of a LinkedList.
     * @returns {number}
     */
    length(): number;

    /**
     * Returns true if the LinkedList has a length of 0 false otherwise.
     * @returns {boolean}
     */
    empty(): boolean;

    /**
     * Adds an item to the beginning of a LinkedList.
     * @param {T} item The elements to add to the beginning of the LinkedList.
     * @returns {number} The new length upon which the method was called.
     */
    unshift(item: T): number;

    /**
     * Removes the first element from an LinkedList
     * @returns {T} The removed element from the LinkedList
     */
    shift(): T;

    /**
     * Adds one or more elements to the end of a LinkedList
     * @param {T} item The elements to add to the end of the LinkedList.
     */
    push(item: T): void;

    /**
     * Removes the last element from an LinkedList and returns that element
     * @returns {T} The removed element from the LinkedList; undefined if the LinkedList is empty.
     */
    pop(): T;

    /**
     * Removes the first instance of an element from the LinkedList
     * @param {T} item The element to remove from the LinkedList
     * @returns {T} The removed element from the LinkedList; undefined if the LinkedList is empty.
     */
    remove(item: T): T;

    /**
     * Executes a provided function once for each LinkedList element.
     * @param {Function} callback Function to execute for each element, taking four arguments: node {Node} The current Node, value {T} The current Node value, index {number} The current index in the LinkedList, LinkedList {LinkedList} The LinkedList.
     */
    forEach(callback: Function): void;

    /**
     * Creates a new LinkedList with all elements that pass the test implemented by the provided function.
     * @param {Function} callback Function is a predicate, to test each element of the LinkedList. Return true to keep the element, false otherwise. It accepts two arguments: item {T} The current item being processed in the array, index {number} The index of the current element being processed in the LinkedList.
     * @returns {LinkedListInterface<T>} A new LinkedList with the elements that pass the test. If no elements pass the test, an empty LinkedList will be returned.
     */
    filter(callback: Function): LinkedListInterface<T>;

    /**
     * Determines whether an LinkedList includes a certain element, returning true or false as appropriate.
     * @param {T} item The item to search for.
     * @returns {boolean} A boolean which is true if the value searchElement is found within the LinkedList.
     */
    includes(item: T): boolean;

    /**
     * Returns the first index at which a given element can be found in the LinkedList, or -1 if it is not present.
     * @param {T} item Item to locate in the LinkedList.
     * @returns {number} The first index of the element in the LinkedList; -1 if not found.
     */
    indexOf(item: T): number;

    /**
     * Remove all the nodes from the LinkedList
     */
    clear(): void;

    /**
     * Return true or false whether a value is in the LinkedList
     * @param item Item to locate in the LinkedList
     */
    contains(item: T): boolean;

    /**
     * @param item Item to find in the LinkedList
     * @returns {Node<T>} First value in the LinkedList; undefined if not
     */
    find(item: T): Node<T>;

}