import Comparator from '../utils/comparator/Comparator';
import DoublyLinkedListNode from './DoublyLinkedListNode';

export default class DoublyLinkedList {
/**
 * @param {Function} [comparator]
 */

  constructor(comparator) {
    /** @var LinkedListNode */
    this.head = null;
    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparator);
  }

  /**
   * Insert value to the tail of the list;
   * @param { * } value
   */
  append(value) {
    const node = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;

      return this;
    }

    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;

    return this;
  }

  /**
   * Add value as the head of a list
   *
   * @param { * } value
   */
  prepend(value) {
    const node = new DoublyLinkedListNode(value, this.head);

    if (this.head) {
      this.head.previous = node;
    }

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // If HEAD is going to be deleted...

          // Set head to second node, which will become new head.
          this.head = deletedNode.next;

          // Set new head's previous to null.
          if (this.head) {
            this.head.previous = null;
          }

          // If all the nodes in list has same value that is passed as argument
          // then all nodes will get deleted, therefore tail needs to be updated.
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          // If TAIL is going to be deleted...

          // Set tail to second last node, which will become new tail.
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          // If MIDDLE node is going to be deleted...
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  /**
 *
 * @param { Object } params
 * @param {*} params.value
 * @param {function} [params.callback]
 * @return {DoublyLinkedListNode}
 */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @returns {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      return null;
    }

    // If there is only one node
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes
    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedTail;
  }

  /**
   * @returns {DoublyLinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedHead = this.head;
      this.head = null;
      this.tail = null;

      return deletedHead;
    }

    const deletedHead = this.head;

    this.head = this.head.next;
    this.head.previous = null;

    return deletedHead;
  }

  /**
   * @returns DoublyLinkedListNode[]
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {*[] values = Array of values to be converted}
   * @returns {DoublyLinkedList}
   */
  fromArray(values) {
    values.forEach(value => this.append(value));

    return this;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  /**
   * Reverse a linked list
   * @returns {DoublyLinkedList}
   */
  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      // store the next node
      nextNode = currentNode.next;
      previousNode = currentNode.previous;

      // Swap the next and previous nodes for the current node
      currentNode.next = previousNode;
      currentNode.previous = nextNode;

      // advance previous node and current node one step
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // reset head and tail
    this.tail = this.head;
    this.head = previousNode;
  }
}
