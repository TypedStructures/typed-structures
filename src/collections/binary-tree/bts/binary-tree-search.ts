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

    remove(item: T): BNode<T> {
        this._root = this.deleteNode(item, this._root);
        return this._root
    }

    private deleteNode(value: T, node: BNode<T>) {
        if (node) {
            if (value < node.data) {
                node.left = this.deleteNode(value, node.left);
            } else if (value > node.data) {
                node.right = this.deleteNode(value, node.right);
            } else if (node.left && node.right) {
                node.data = this.getMinValue(node.right);
                node.right = this.deleteNode(node.data, node.right);
            } else {
                if (node.left) {
                    node = node.right;
                } else if (node.right) {
                    node = node.left
                } else {
                    const result = node;
                    node = undefined;
                    return result;
                }
            }
        }
        return node;
    }

    private getMinValue(node: BNode<T>): T {
        return node.left ? this.getMinValue(node.left) : node.data;
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
