export interface IBNode {

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

}
