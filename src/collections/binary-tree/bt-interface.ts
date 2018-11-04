export interface IBinaryTree<T> {
    
    /**
     * add an element.
     * 
     * @param item the element to add
     * @returns {boolean} true if added, false otherwise
     */
    add(item: T): boolean;

    /**
     * delete an element.
     * 
     * @param item the element to remove
     * @returns {boolean} true if added, false otherwise
     */
    remove(item: T): boolean;

    /**
     * the first element in the tree.
     * 
     * @param item the element to find
     * @returns {T} the first element
     */
    find(item: T): T;
}