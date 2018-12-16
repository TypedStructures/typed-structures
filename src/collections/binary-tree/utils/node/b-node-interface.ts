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
     * Return the minimum value in a subtree
     * @return {T} the value of the node
     */
    getMinValue(): T;

}
