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
        if (root.data === undefined) {
            return undefined;
        } else {
            // if root is the element
            if (root.data === item) {
                const result = root;
                root = undefined;
                return result.data;
            // otherwise recursive
            } else {
                if (root.data > item ) {
                    this.remove(root.left, item);
                } else {
                    this.remove(root.right, item);
                }
            }
        }
    }

    find(item: T): T {
        throw new Error('Method not implemented.');
    }

    private create(item: T): BNode<T> {
        return new BNode<T>(item);
    }

}
