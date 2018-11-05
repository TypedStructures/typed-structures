import { BinaryTreeSearch } from './binary-tree-search';

describe('new tree element', function () {
    it('should add to the root', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.root()).toEqual(undefined);
        expect(tree.add(root, 1)).toBe(true);
        expect(tree.root().data).toEqual(1);
    });

    it('should add to the right', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 1)).toBe(true);
        expect(tree.root().data).toBeLessThan(2);
        expect(tree.add(root, 2)).toBe(true);
        expect(tree.root().right.data).toEqual(2);
    });

    it('should add to the left', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2)).toBe(true);
        expect(tree.root().data).toBeGreaterThan(1);
        expect(tree.add(root, 1)).toBe(true);
        expect(tree.root().left.data).toEqual(1);
    });
});