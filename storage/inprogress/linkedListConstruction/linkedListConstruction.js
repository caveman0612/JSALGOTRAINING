// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head == null) this.head = node;
  }

  setTail(node) {
    // Write your code here.
  }

  insertBefore(node, nodeToInsert) {}

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    let counter = 1;
    let currentNode = this.head;
    while (!currentNode) {
      if (counter == position) {
        nodeToInsert.prev = currentNode.prev;
      }
    }
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      const nodeToRemove = currentNode;
      currentNode = currentNode.next;
      if (nodeToRemove.value == value) this.remove(nodeToRemove);
    }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.detachNodeFromList(node);
  }

  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  detachNodeFromList(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}

module.exports = { Node, DoublyLinkedList };
