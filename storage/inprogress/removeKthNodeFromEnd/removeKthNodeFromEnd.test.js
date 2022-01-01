// import { LinkedList, removeKthNodeFromEnd } from "./removeKthNodeFromEnd";
const { LinkedList, removeKthNodeFromEnd } = require("./removeKthNodeFromEnd");

describe("", () => {
  const one = new LinkedList(1);
  const two = new LinkedList(2);
  const three = new LinkedList(3);
  const four = new LinkedList(4);
  one.next = two;
  two.next = three;
  three.next = four;

  test("should 1", () => {
    expect(one).toBeTruthy();
    expect(one.value).toBe(1);
  });

  test("should 2", () => {
    expect(removeKthNodeFromEnd(one, 2)).toEqual(three);
  });
});
