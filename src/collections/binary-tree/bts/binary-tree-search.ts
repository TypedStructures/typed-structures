import { IBinaryTree } from '../bt-interface';
import { BNode } from '../utils/node/b-node';

const LEFT = 'left';
const RIGHT = 'right';

export class BinaryTreeSearch<T> implements IBinaryTree<T> {

    private _root?: BNode<T>;

    constructor() {
        this._root = undefined;
    }

    root(): BNode<T> {
        return this._root;
    }

    add(root: BNode<T>, item: T): boolean {

        const newNode = this.create(item);

        if (this.root() === undefined) {
            this._root = newNode;
        } else
            this.insertNode(this._root, newNode);
        return true;
    }

    private insertNode(node: BNode<T>, newNode: BNode<T>) {

        if (newNode.data < node.data) {

            if (node.left === undefined)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {

            if (node.right === undefined)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    remove(root: BNode<T>, item: T): T {

        // if root is undefined
        if (this.root() === undefined) {
            return undefined;
        } else {
            // if root is the element
            if (this.root().data === item) {
                const result = this.root().data;
                this._root = undefined;
                return result;
                // otherwise recursive
            } else {
                this.removeNode(this._root, item);
            }
        }
    }

    private removeNode(node: BNode<T>, item: T) {

        if (item < node.data) {

            if (node.left.data === item) {
                node.left = undefined;
            }
            else
                this.removeNode(node.left, item);
        } else {

            if (node.right.data === item) {
                node.right = undefined;
            }
            else
                this.removeNode(node.right, item);
        }
    }

    find(item: T): T {
        throw new Error('Method not implemented.');
    }

    private create(item: T): BNode<T> {
        return new BNode<T>(item);
    }

}
