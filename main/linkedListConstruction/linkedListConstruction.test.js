// import { Node, DoublyLinkedList } from "./linkedListConstruction";
const { Node, DoublyLinkedList } = require("./linkedListConstruction");

describe("", () => {
  test("Node works", () => {
    const node1 = new Node(1);
    expect(node1).toBeTruthy();
  });
});

describe("contains", () => {
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

  test("linked list contains value 2", () => {
    expect(linkedList.containsNodeWithValue(2)).toBeTruthy();
  });

  test("linked list contains value 4", () => {
    expect(linkedList.containsNodeWithValue(4)).toBeFalsy();
  });

  test("remove node 2", () => {
    linkedList.remove(two);
    expect(one.next).toEqual(three);
  });
  test("remove node 1", () => {
    linkedList.remove(one);
    expect(two.prev).toBeNull();
  });
  test("remove node 1", () => {
    linkedList.remove(one);
    expect(two.prev).toBeNull();
  });
});
