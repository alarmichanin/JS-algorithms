class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Heap {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        if (value >= this.root.value) {
            newNode.left = this.root;
            this.root = newNode;
            return this;
        }
        function findPlace(node) {
            if (!node.right) {
                node.right = newNode;
                return this;
            }
            if (!node.left) {
                node.left = newNode;
                return this;
            }
            if (value >= node.left.value) {
                newNode.left = node.left;
                node.left = newNode;
                return this;
            } else {
                findPlace(node.left);
            }
            if (value >= node.right.value) {
                newNode.right = node.right;
                node.right = newNode;
                return this;
            } else {
                findPlace(node.right);
            }
        }
        findPlace(this.root);
    }
    fromArr(values) {
        values.map(value => this.add(value));
        return this;
    }
}

let heap = new Heap();
heap.fromArr([40, 20, 60, 25]);
console.log(heap);