export interface NodeInterface {

    /**
     * Returns true if the node is attached to another one through his next attribute.
     * @return {boolean} true if the node as a next node, false otherwise
     */
    hasNext(): boolean;

    /**
     * Returns true if the node is attached to another one through his previous attribute.
     * @return {boolean} true if the node as a previous node, false otherwise
     */
    hasPrevious(): boolean;
}