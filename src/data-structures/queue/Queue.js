import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * Check if the queue has elements
   * @returns {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Add a new element to the end of the queue.
   * @param {*} value
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removedNode = this.linkedList.deleteHead();
    return removedNode ? removedNode.value : null;
  }

  /**
   * Read the element at the front of the queue but don't remove it
   */
  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   *
   * @param {*} callback
   * @returns {string}
   */
  toString(callback) {
    // Just use the linked list's to string method
    return this.linkedList.toString(callback);
  }
}
