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
}
