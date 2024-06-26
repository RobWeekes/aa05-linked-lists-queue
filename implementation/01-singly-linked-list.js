// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    // this.tail = null;
  }

  addToHead(val) {
    // Add node of val to head of linked list

    const newNode = new SinglyLinkedNode(val);
    //if there was a head before adding new head, bump
    //the old head to the right
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
    return this;

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    // Remove node at head
    if (!this.head) return undefined;
    let removedHead = this.head;
    this.head = this.head.next;
    this.length--;
    return removedHead;

    // Write your hypothesis on the time complexity of this method here
  }

  // FROM LECTURE --
  // let current = this.head;
  // let previous;
  
  // while(current.next) {
  //   previous = current;
  //   current = current.next;
  // }

  removeFromTail() {
    let current = this.head;
    let previous;
    // if(this.length === 0) return undefined; // edge case for empty list
    if(!this.head) return undefined;           // either one works 
    // Remove node at tail
    // console.log(current.next);
    while(current.next) {
      previous = current;
      // console.log(previous);
      current = current.next;
    }
    if(!previous) this.head = null;   // edge case for having 1 node
    else {
        previous.next = null;
        // console.log(removedTail);
        // linkedList.tail = current; // only code this for doubly linked list
    }
        this.length--;
        return current;
 
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return the value of head node
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
}

// local testing

let linkedList = new SinglyLinkedList();

console.log(linkedList.addToHead('A'));
console.log(linkedList.addToTail('B'));
console.log(linkedList.addToTail('C'));

linkedList.removeFromTail();
console.log(linkedList.head) // { value: 'A', next: { value: 'B', next: null } });
linkedList.removeFromTail();
console.log(linkedList.head) // { value: 'A', next: null });
linkedList.removeFromTail();
console.log(linkedList.head) // null;

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
