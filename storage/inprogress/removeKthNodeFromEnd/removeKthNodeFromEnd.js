class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let currentNode = head;
  let trailingNode = head;
  while (currentNode.next) {
    if (counter == k + 1) {
      trailingNode = trailingNode.next;
      currentNode = currentNode.next;
    } else {
      currentNode = currentNode.next;
      counter++;
    }
  }
  if (trailingNode == head) {
  }
  trailingNode.next = trailingNode.next.next;
}

// const one = new LinkedList(1);
// const two = new LinkedList(2);
// const three = new LinkedList(3);
// const four = new LinkedList(4);
// one.next = two;
// two.next = three;
// three.next = four;
// console.log(removeKthNodeFromEnd(one, 2));

exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
