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

describe('return min value', function () {
    it('should return same node value', function () {
        let node1: BNode<number> = new BNode<number>(5);
        let node2: BNode<number> = new BNode<number>(6);
        expect(node1.getMinValue()).toEqual(5);
    });
    it('should return min value', function () {
        let node1: BNode<number> = new BNode<number>(5);
        let node2: BNode<number> = new BNode<number>(6);
        let node3: BNode<number> = new BNode<number>(4);
        node1.right = node2;
        node1.left = node3;
        expect(node1.getMinValue()).toEqual(4);
    });
});

describe('remove', function () {
    it('should return left undefined', function () {
        let node2: BNode<number> = new BNode<number>(4);
        let node3: BNode<number> = new BNode<number>(5);
        node2.right = node3;
        node2.left = undefined;

        expect(node2.remove(node2,2)).toBe(false);
    });
    it('should return right undefined', function () {
        let node2: BNode<number> = new BNode<number>(5);
        let node3: BNode<number> = new BNode<number>(4);
        node2.left = node3;
        node2.right = undefined;

        expect(node2.remove(node2,6)).toBe(false);
    });
    it('should remove left node', function () {
        let node2: BNode<number> = new BNode<number>(5);
        let node3: BNode<number> = new BNode<number>(4);
        let node4: BNode<number> = new BNode<number>(3);
        node2.left = node3;
        node3.left = node4;
        expect(node2.remove(node2,4)).toBe(true);
    });
    it('should remove right node', function () {
        let node2: BNode<number> = new BNode<number>(5);
        let node3: BNode<number> = new BNode<number>(6);
        let node4: BNode<number> = new BNode<number>(7);
        node2.right = node3;
        node3.right = node4;
        expect(node2.remove(node2,6)).toBe(true);
    });
    it('should remove min value', function () {
        let node2: BNode<number> = new BNode<number>(5);
        let node3: BNode<number> = new BNode<number>(6);
        let node4: BNode<number> = new BNode<number>(4);
        let node5: BNode<number> = new BNode<number>(3);
        let node6: BNode<number> = new BNode<number>(5);
        node2.right = node3;
        node2.left = node4;
        node4.left = node5;
        node4.right = node6;
        expect(node2.remove(node2,4)).toBe(true);
    });
});