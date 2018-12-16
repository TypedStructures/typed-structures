import { BNode } from "./b-node";

export interface IBNode<T> {

    /**
     * Return wether the current node has a left child node
     * @return {boolean} true if the node as a left node, false otherwise
     */
    hasLeft(): boolean;

    /**
     * Return wether the current node has a right child node
     * @return {boolean} true if the node as a right node, false otherwise
     */
    hasRight(): boolean;

    /**
     * add a node
     * @param item item to be add
     * @return {boolean} true if the node as been added, false otherwise
     */
    add(item: T): boolean

    /**
     * remove a node
     * @param parent parent element
     * @param item item to be removed
     * @return {boolean} true if the node as been removed, false otherwise
     */
    remove(parent: BNode<T>, item: T): boolean

    /**
     * Return the minimum value in a subtree
     * @return {T} the value of the node
     */
    getMinValue(): T;

}
