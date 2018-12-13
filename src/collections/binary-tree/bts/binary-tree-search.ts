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
        if (root === undefined) {
            return undefined;
        } else {
            if (item < root.data) {
                return this.remove(root.left, item);
            } else if (item > root.data) {
                return this.remove(root.right, item);
            } else {
                // no children
                if (root.right === undefined && root.left === undefined) {
                    const result = root;
                    root = undefined;
                    return result;
                    // no left children
                } else if (root.left === undefined) {
                    const result = root.right;
                    root.right = root;
                    return result
                    // no right children
                } else if (root.right === undefined) {
                    const result = root.left;
                    root.left = root;
                    return result
                } else {
                    // two childs
                    root.data = this.getMinValue(root.right);
                    root.right = this.remove(root.right, root.data);
                }
            }
        }
        return root;
    }

    private getMinValue(node: BNode<T>): T {
        let minimum: T = node.data;
        while (node.left !== undefined) {
            minimum = node.left.data;
            node = node.left;
        }
        return minimum;
    }

    find(root: BNode<T>, item: T): T {
        if (root === undefined) {
            return undefined;
        } else {
            if (item < root.data) {
                return this.find(root.left, item);
            } else if (item > root.data) {
                return this.find(root.right, item);
            } else {
                return root.data;
            }
        }
    }

    private create(item: T): BNode<T> {
        return new BNode<T>(item);
    }

}
