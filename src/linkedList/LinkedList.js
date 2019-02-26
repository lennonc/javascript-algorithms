import ListNode from './ListNode';
import Comparator from '../utils/comparator/Comparator';

export default class LinkedList {
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
   * Insert a value to the tail of the List
   * @param { * } value
   */
  append(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;

      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  /**
   * Insert a value as the head of a list
   * @param { * } value
   */
  prepend(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;

      return this;
    }

    node.next = this.head;
    this.head = node;

    return this;
  }

  /**
   * Delete a node by value
   * @param { * } value
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If we're deleting the head. Make the next node the head
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if we need to delete the tail
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * @returns ListNode
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    const deletedHead = this.head;

    if (!this.head) {
      return null;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   *
   * @param { Object } params
   * @param {*} params.value
   * @param {function} [params.callback]
   * @return {ListNode}
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
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  /**
   * @returns ListNode[]
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

  fromArray(values) {
    values.forEach(element => this.append(element));

    return this;
  }
}
