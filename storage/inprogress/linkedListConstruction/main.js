const { Node, DoublyLinkedList } = require("./linkedListConstruction");
// import { Node, DoublyLinkedList } from "./linkedListConstruction";

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;

two.next = three;
two.prev = one;

three.prev = two;
const linkedList = new DoublyLinkedList();
linkedList.head = one;
linkedList.tail = three;

linkedList.removeNodesWithValue(2);

console.log(one);
console.log(two);
console.log(three);
