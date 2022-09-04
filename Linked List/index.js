// Implementing A Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printlist();
    }
    // Check Params
    if (index >= this.length) {
      return this.append(value);
    }
    //
    const newNode = new Node(value);
    const preNode = this.traverse(index - 1);
    const nextNode = preNode.next;
    preNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }
  remove(index) {
    const preNode = this.traverse(index - 1);
    const unwantedNode = preNode.next;
    const nextNode = unwantedNode.next;
    preNode.next = nextNode;
    this.length--;
  }
  // Traversing LinkedList upto given index
  traverse(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printlist() {
    let array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push({ value: currentNode.value, next: currentNode.next });
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.printlist();
myLinkedList.insert(44, 13);
// console.log(myLinkedList.traverse(2));
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printlist());
