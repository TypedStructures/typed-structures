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

    remove(root: BNode<T>, item: T): BNode<T> {

        if (this._root === undefined) {
            return undefined;
        } else {
            if (item < root.data) {
                this.remove(root.left, item);
            } else if (item > root.data) {
                this.remove(root.right, item);
            } else {
                // no children
                if (root.right === undefined && root.left === undefined) {
                    return undefined;
                    // no left children
                } else if (root.left === undefined) {
                    return root.right
                    // no right children
                } else if (root.right === undefined) {
                    return root.left;
                } else {
                    // two childs
                    const minValue = this.getMinValue(root.right);
                    root.data = minValue
                    root.right = this.remove(root.right, minValue);
                }
            }
        }
        return root;
    }

    private getMinValue(node: BNode<T>): T {
        if (node.left !== undefined) {
            return this.getMinValue(node.left);
        }
        return node.data;
    }

    find(item: T): T {
        throw new Error('Method not implemented.');
    }

    private create(item: T): BNode<T> {
        return new BNode<T>(item);
    }

}
