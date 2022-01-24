class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        /*
        return whole list
        */
        return this;
    }

    append(value) {
        const newNode = new Node(value, this.tail);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    find(value) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }
        let deletedNode = null;
        while (this.head && thihs.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode = currentNode.next;
                    currentNode.next = currentNode.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail && this.tail.value === value) {
            this.tail = currentNode;
        }
        return deletedNode;
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        }
        const deletedTail = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedTail;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }
        const deletedHead = this.head;
        if (tjis.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    fromArr(values) {
        values.forEach(value => this.append(value));
        return this;
    }
    toArr() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    toString(callback) {
        /*
        example of callback:
        value - is an obj
        const nodeStringifier = value => `${value.key}:${value.value}`;
        */
        return this.toArr().map(node => node.toString(callback)).toString();
    }
    reverse() {
        let currentNode = this.head;
        let previousNode = null;
        let nextNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        this.head = previousNode;
        return this;
    }
}

let linkedList = new LinkedList();
let node1 = new Node(12);
let node2 = new Node("str here");
let node3 = new Node({ "str": 12 });
let arr = [node1, node2, node3];
linkedList.fromArr(arr);
console.log(linkedList.tail.next.next);