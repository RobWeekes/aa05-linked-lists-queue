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
    // if there was a head before adding new head, bump the old head to the right
    // newNode.next = null if new node is the first node 
    newNode.next = this.head;  // newNode.next = old head if one existed
    this.head = newNode;  // point to the new head in linked list .head attribute
    this.length++;              
    return this;
    // Write your hypothesis on the time complexity of this method here
    // Time complexity = O(1), no traversing or looping is needed for these pointing operations
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {  // if there is no head, new node becomes head
      this.head = newNode;
    } else {   // if there is a head, traverse the nodes to the tail
      let curr = this.head;
      while (curr.next) {   // while there is a next node, hop to the next
        curr = curr.next;
      }                     // while loop stops at the current (old) tail node
      curr.next = newNode;  // old tail node.next was null, now point it to new tail node
    }
    this.length++;
    return this;

    // Write your hypothesis on the time complexity of this method here
    // Time complexity is O(n) (worst case) because of linked list traversal
  }

  removeFromHead() {
    // Remove node at head
    if (!this.head) return undefined;
    let removedHead = this.head;
    this.head = this.head.next;   // point linked list head attribute to the next node
    this.length--;
    return removedHead;

    // Write your hypothesis on the time complexity of this method here
    // Time Complexity is O(1), no traversal or looping needed
  }

  removeFromTail() {
    let current = this.head;    // always start at head node
    let previous;
    // if(this.length === 0) return undefined; // edge case for empty list
    if(!this.head) return undefined;           // either one works 
    // Remove node at tail
    // console.log(current.next);
    while(current.next) {
      previous = current;
      // console.log(previous);
      current = current.next;   // traverse the linked list to the tail
    }
    if(!previous) this.head = null;   // edge case for having 1 node, eliminate the head then
    else {
        previous.next = null;  // removing pointer from 2nd to last node cuts off tail node
        // console.log(removedTail);
        // linkedList.tail = current; // only code this for doubly linked list
    }

    this.length--;
    return current;
 
    // Write your hypothesis on the time complexity of this method here
  } // Time complexity (worst case) is O(n) because of linked list traversal

  peekAtHead() {
    if(!this.head) return undefined;    // empty list
    // Return the value of head node
    return this.head.value;

    // Write your hypothesis on the time complexity of this method here
    // Time complexity is constant O(1) because it's evaluating 1 node
  }

  print() {
    // Print out the linked list
    let current = this.head;
    while(current) {
        // process.stdout.write(`${current.value} -> `);
        console.log(current.value);
        current = current.next;
    }
    // Write your hypothesis on the time complexity of this method here
  } // Time complexity is linear O(n) because it traverses whole list
}

// local testing

// let linkedList = new SinglyLinkedList();

// console.log(linkedList.addToHead('A'));
// console.log(linkedList.addToTail('B'));
// console.log(linkedList.addToTail('C'));

// linkedList.removeFromTail();
// console.log(linkedList.head) // { value: 'A', next: { value: 'B', next: null } });
// linkedList.removeFromTail();
// console.log(linkedList.head) // { value: 'A', next: null });
// linkedList.removeFromTail();
// console.log(linkedList.head) /

// console.log(linkedList.addToTail('B'));
// console.log(linkedList.addToTail('C'));
// console.log(linkedList.peekAtHead()); // 'B'
// console.log(linkedList.addToHead('A'));
// console.log(linkedList.peekAtHead()); // 'A'

// linkedList.addToTail('B');
// linkedList.addToTail('C');
// linkedList.addToTail('D');
// linkedList.addToHead('A');
// linkedList.print();



module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
