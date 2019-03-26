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

     add(item: T): boolean {
        if (this._root == null) {
            this._root = this.create(item);
            return true;
      } else
            return this._root.add(item);
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
