import { Node } from '../node';

export class SinglyLinkedList<T> {

    private _head?: Node<T>;
    private _size: number;

    constructor() {
        this._size = 0;
    }

    /**
     * Returns the number of nodes of a SinglyLinkedList.
     * @returns {number}
     */
    public length(): number {
        return this._size;
    }

    /**
     * Returns true if the SinglyLinkedList has a length of 0 false otherwise.
     * @returns {boolean}
     */
    public empty(): boolean {
        return this.length() === 0;
    }

    /**
     * Adds an item to the beginning of a SinglyLinkedList.
     * @param {T} item The elements to add to the beginning of the SinglyLinkedList.
     * @returns {number} The new length upon which the method was called.
     */
    public unshift(item: T) {

        if (item === undefined) {
            return 0;
        }

        if (this._head === undefined) {
            this._head = this.create(item);

        } else {
            const node = this.create(item);
            node.next = this._head;
            this._head = node;
        }

        ++this._size;

        return this._size;

    }

    /**
     * Removes the first element from an SinglyLinkedList
     * @returns {T} The removed element from the SinglyLinkedList
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
     * Adds one or more elements to the end of a SinglyLinkedList
     * @param {T} item The elements to add to the end of the SinglyLinkedList.
     */
    public push(item: T): void {
        if (this.empty()) {
            this._head = this.create(item);

        } else {
            let current = this._head;

            while (current.hasNext()) {
                current = current.next;
            }
            current.next = this.create(item);
        }

        ++this._size;

    }

    /**
     * Removes the last element from an SinglyLinkedList and returns that element
     * @returns {T} The removed element from the SinglyLinkedList; undefined if the SinglyLinkedList is empty.
     */
    public pop(): T {

         if (this.empty()) {
            return undefined;
        }

        if (this.length() === 1) {
            this._head = undefined;

        } else {
            let current = this._head;
            let previous;

            while (current.hasNext()) {
                previous = current;
                current = current.next;
            }

            previous.next = undefined;

            return current.data;
        }

        --this._size;
    }

    /**
     * Removes the first instance of an element from the SinglyLinkedList
     * @param {T} item The element to remove from the SinglyLinkedList
     * @returns {T} The removed element from the SinglyLinkedList; undefined if the SinglyLinkedList is empty.
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
     * Executes a provided function once for each SinglyLinkedList element.
     * @param {Function} callback Function to execute for each element, taking four arguments: node {Node} The current Node, value {T} The current Node value, index {number} The current index in the SinglyLinkedList, SinglyLinkedList {SinglyLinkedList} The SinglyLinkedList.
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
     * Creates a new SinglyLinkedList with all elements that pass the test implemented by the provided function.
     * @param {Function} callback Function is a predicate, to test each element of the SinglyLinkedList. Return true to keep the element, false otherwise. It accepts two arguments: item {T} The current item being processed in the array, index {number} The index of the current element being processed in the SinglyLinkedList.
     * @returns {SinglyLinkedList<T>} A new SinglyLinkedList with the elements that pass the test. If no elements pass the test, an empty SinglyLinkedList will be returned.
     */
    public filter(callback: Function): SinglyLinkedList<T> {
        let result = new SinglyLinkedList<T>();
        this.forEach( (item: any, index: number) => {
            if (callback.call(item, item, index, this)) {
                result.push(item.data);
            }
        });
        return result;
    }

    /**
     * Determines whether an SinglyLinkedList includes a certain element, returning true or false as appropriate.
     * @param {T} item The item to search for.
     * @returns {boolean} A boolean which is true if the value searchElement is found within the SinglyLinkedList.
     */
    public includes(item: T): boolean {
        return this.filter( (element: T)  => element === item).length() > 0;
    }

    /**
     * Returns the first index at which a given element can be found in the SinglyLinkedList, or -1 if it is not present.
     * @param {T} item Item to locate in the SinglyLinkedList.
     * @returns {number} The first index of the element in the SinglyLinkedList; -1 if not found.
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