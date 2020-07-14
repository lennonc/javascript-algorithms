import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * Put a value on top of the stack
   *
   * @param {*} value
   */
  push(value) {
    this.linkedList.prepend(value);
  }

  /**
   * Get the value from the top of the list
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @returns { *[]}
   */
  toArray() {
    return this
      .linkedList
      .toArray()
      .map((node) => node.value);
  }

  /**
   *
   * @param {function} callback
   * @returns {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
