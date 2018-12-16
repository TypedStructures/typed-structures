import { IBinaryTree } from '../bt-interface';
import { BNode } from '../utils/node/b-node';

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

    remove(item: T): boolean {
        if (this._root === undefined)
                  return false;
            else {
                  if (this.root().data == item) {
                        const temp = this.create(item);
                        temp.left = this._root;
                        const result = this._root.remove(temp, item);
                        this._root = temp.left;
                        return result;
                  } else {
                        return this._root.remove(undefined, item);
                  }

            }
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
