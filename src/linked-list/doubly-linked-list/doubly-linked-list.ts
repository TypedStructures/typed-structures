import { Node } from '../node';

export class DoublyLinkedList<T> {

    private _head?: Node<T>;
    private _tail?: Node<T>;
    private _size: number;

    constructor() {
        this._size = 0;
    }

    /**
     * Returns the number of nodes of a DoublyLinkedList.
     * @returns {number}
     */
    public length(): number {
        return this._size;
    }

    /**
     * Returns true if the DoublyLinkedList has a length of 0 false otherwise.
     * @returns {boolean}
     */
    public empty(): boolean {
        return this.length() === 0;
    }

    /**
     * Adds an item to the beginning of a DoublyLinkedList.
     * @param {T} item The elements to add to the beginning of the DoublyLinkedList.
     * @returns {number} The new length upon which the method was called.
     */
    public unshift(item: T) {
        if (item === undefined) {
            return 0;
        }

        if (this._head === undefined) {
            this._head = this.create(item);
            this._tail = this._head;

        } else {
            const node = this.create(item);
            node.next = this._head;
            this._head = node;
            this._tail = this._head;
        }

        ++this._size;
    }

    /**
     * Removes the first element from an DoublyLinkedList
     * @returns {T} The removed element from the DoublyLinkedList
     */
    public shift(): T {
        if (this.empty()) {
            return undefined;
        } else {
            let result = this._head;
            this._head = this._head.next;
            --this._size;
            return result.data;
        }
    }

    /**
     * Adds one or more elements to the end of a DoublyLinkedList
     * @param {T} item The elements to add to the end of the DoublyLinkedList.
     */
    public push(item: T): void {
        if (this.empty()) {
            this._head = this._tail = this.create(item);

        } else {
            let current = this.create(item);
            this._tail.next = current;
            current.previous = this._tail;
            this._tail = current;
        }

        ++this._size;
    }

    /**
     * Removes the last element from an DoublyLinkedList and returns that element
     * @returns {T} The removed element from the DoublyLinkedList; undefined if the DoublyLinkedList is empty.
     */
    public pop(): T {

        if (this.empty()) {
            return undefined;
        }

        if (this.length() === 1) {
            this._head = this._tail = undefined;

        } else {
            let current = this._tail;
            this._tail = current.previous;
            return current.data;
        }

        --this._size;
    }

    /**
     * Removes the first instance of an element from the DoublyLinkedList
     * @param {T} item The element to remove from the DoublyLinkedList
     * @returns {T} The removed element from the DoublyLinkedList; undefined if the DoublyLinkedList is empty.
     */
    public remove(item: T): T {
        if (this.empty()) {
            return undefined;
        } else {
            let current = this._head;
            let previous;

            while (current.data !== item) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            return current.data;

        }
    }

    /**
    * Executes a provided function once for each DoublyLinkedList element.
    * @param {Function} callback Function to execute for each element, taking four arguments: node {Node} The current Node, value {T} The current Node value, index {number} The current index in the DoublyLinkedList, DoublyLinkedList {DoublyLinkedList} The DoublyLinkedList.
    */
    public forEach(callback: Function) {
        let current = this._head;
        let index = 0;
        while (current) {
            callback.call(current, current.data, index++, this);
            current = current.next;
        }
    }

    /**
     * Creates a new DoublyLinkedList with all elements that pass the test implemented by the provided function.
     * @param {Function} callback Function is a predicate, to test each element of the DoublyLinkedList. Return true to keep the element, false otherwise. It accepts two arguments: item {T} The current item being processed in the array, index {number} The index of the current element being processed in the DoublyLinkedList.
     * @returns {DoublyLinkedList<T>} A new DoublyLinkedList with the elements that pass the test. If no elements pass the test, an empty DoublyLinkedList will be returned.
     */
    public filter(callback: Function): DoublyLinkedList<T> {
        let result = new DoublyLinkedList<T>();
        this.forEach((item: any, index: number) => {
            if (callback.call(item, item, index, this)) {
                result.push(item.data);
            }
        });
        return result;
    }

    /**
     * Determines whether an DoublyLinkedList includes a certain element, returning true or false as appropriate.
     * @param {T} item The item to search for.
     * @returns {boolean} A boolean which is true if the value searchElement is found within the DoublyLinkedList.
     */
    public includes(item: T): boolean {
        return this.filter((element: T) => element === item).length() > 0;
    }

    /**
     * Returns the first index at which a given element can be found in the DoublyLinkedList, or -1 if it is not present.
     * @param {T} item Item to locate in the DoublyLinkedList.
     * @returns {number} The first index of the element in the DoublyLinkedList; -1 if not found.
     */
    public indexOf(item: T): number {
        let index = 0;
        let current = this._head;

        while (current) {
            if (current.data === item) {
                return index;
            }
            current = current.next;
            ++index;
        }

        return -1;

    }

    /**
     * Creates a new node from a value.
     * @param {T} item Value of the new Node
     * @returns {Node<T>} Newly created Node
     */
    private create(item: T): Node<T> {
        return new Node<T>(item);
    }
}