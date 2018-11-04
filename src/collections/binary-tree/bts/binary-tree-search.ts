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

        if (root === undefined) {
            root = this.create(item);
            return true;
        } else {
            if (root.data > item) {
                this.add(root.left, item);
            } else {
                this.add(root.right, item);
            }
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
        throw new Error("Method not implemented.");
    }

    private create(item: T): BNode<T> {
        return new BNode<T>(item);
    }

}
