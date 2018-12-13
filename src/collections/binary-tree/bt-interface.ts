import { BNode } from './utils/node/b-node';

export interface IBinaryTree<T> {

    /**
     * add an element.
     *
     * @param root
     * @param item the element to add
     * @returns {boolean} true if added, false otherwise
     */
    add(root: BNode<T>, item: T): boolean;

    /**
     * delete an element.
     *
     * @param root
     * @param item the element to remove
     * @returns {boolean} true if added, false otherwise
     */
    remove(root: BNode<T>, item: T): BNode<T>;

    /**
     * the first element in the tree.
     *
     * @param item the element to find
     * @returns {T} the first element
     */
    find(root: BNode<T>, item: T): T;

    /**
     * return the root of the tree.
     * @returns {BNode} the root node
     */
    root(): BNode<T>;
}