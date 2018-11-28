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

    it('should add recursively left or right', function () {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.add(root, 3))
        expect(tree.add(root, 1))
        expect(tree.add(root, 4))
        expect(tree.add(root, 0))
    });
});

describe('remove tree element', function() {
    it('should return undefined', function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.remove(root, 1)).toBeUndefined();
    });
    it('should remove', function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        tree.add(root, 1);
        expect(tree.root().data).toEqual(1);
        expect(tree.remove(root, 1))
    });
    it('should remove left', function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        tree.add(root, 2);
        tree.add(root, 1);
        expect(tree.remove(root, 1))
        expect(tree.root().left).toBeUndefined();
    });
    it('should remove right', function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        tree.add(root, 1);
        tree.add(root, 2);
        expect(tree.remove(root, 2))
        expect(tree.root().right).toBeUndefined();
    });
    it('should remove recursively', function() {
        let tree: BinaryTreeSearch<any> = new BinaryTreeSearch<any>();
        let root = tree.root();
        expect(tree.add(root, 2))
        expect(tree.add(root, 3))
        expect(tree.add(root, 1))
        expect(tree.add(root, 4))
        expect(tree.add(root, 0))
        expect(tree.remove(root, 4))
        expect(tree.remove(root, 0))
    });
    
})