import ListNode from './ListNode';

export default class LinkedList {
  constructor() {
    /** @var LinkedListNode */
    this.head = null;
    /** @var LinkedListNode */
    this.tail = null;
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
}
