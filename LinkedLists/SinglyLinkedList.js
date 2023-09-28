const SinglyLinkedListNode = require("./SinglyLinkedListNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    let newNode = new SinglyLinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.value;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    else if (index > this.length || index < 0)
      throw new Error("You index is outta bounds");

    let prevNode = this.getByIndex(index - 1);
    if (prevNode === null) return;

    prevNode.next = new SinglyLinkedListNode(value, prevNode.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeFromIndex(index) {
    if (index === 0) return this.removeHead();
    else if (index > this.length || index < 0)
      throw new Error("Cannot remove node, try again");

    let prevNode = this.getByIndex(index - 1);
    if (prevNode === (null || undefined)) return;

    prevNode.next = prevNode.next.next;
    this.length--;
  }
}

SinglyLinkedList.fromValues = (...values) => {
  let sl = new SinglyLinkedList();

  for (let i = values.length; i >= 0; i++) {
    sl.insertAtHead(values[i]);
  }

  return sl;
};

module.exports = SinglyLinkedList;
