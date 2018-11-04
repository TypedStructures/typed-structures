import { BNode } from './b-node';

describe('hasLeft', function () {
    it('should be true', function () {
        let root: BNode<number> = new BNode<number>(1);
        let left: BNode<number> = new BNode<number>(2);
        root.left = left;

        expect(root.hasLeft()).toBe(true);
    });

    it('should be false', function () {
        let root: BNode<number> = new BNode<number>(1);
        expect(root.hasLeft()).toBe(false);
        root.left = null;
        expect(root.hasLeft()).toBe(false);
    });
});

describe('hasRight', function () {
    it('should be true', function () {
        let root: BNode<number> = new BNode<number>(1);
        let right: BNode<number> = new BNode<number>(2);
        root.right = right;

        expect(root.hasRight()).toBe(true);
    });

    it('should be false', function () {
        let root: BNode<number> = new BNode<number>(1);
        expect(root.hasLeft()).toBe(false);
        root.left = null;
        expect(root.hasLeft()).toBe(false);
    });
});

describe('data', function () {
    it('should return 1', function () {
        let node: BNode<number> = new BNode<number>(1);
        expect(node.data).toEqual(1);
    });

    it('should set 2', function () {
        let node: BNode<number> = new BNode<number>(1);
        node.data = 2
        expect(node.data).toEqual(2);
    });
});

describe('left', function () {
    it('should return 1', function () {
        let root: BNode<number> = new BNode<number>(1);
        let left: BNode<number> = new BNode<number>(2);
        root.left = left;
        expect(root.left.data).toEqual(2);
    });

    it('should set 2', function () {
        let root: BNode<number> = new BNode<number>(1);
        let left: BNode<number> = new BNode<number>(2);
        root.left = left;
        expect(root.left.data).toEqual(2);
    });
});

describe('right', function () {
    it('should return 1', function () {
        let root: BNode<number> = new BNode<number>(1);
        let right: BNode<number> = new BNode<number>(2);
        root.right = right;
        expect(root.right.data).toEqual(2);
    });

    it('should set 2', function () {
        let root: BNode<number> = new BNode<number>(1);
        let right: BNode<number> = new BNode<number>(2);
        root.right = right;
        expect(root.right.data).toEqual(2);
    });
});