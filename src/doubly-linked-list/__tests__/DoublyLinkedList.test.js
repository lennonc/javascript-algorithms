import DoublyLinkedList from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('should create a new doubly linked list', () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should append a node to the list', () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBeNull();

    list.append(1);

    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);

    list.append(2);
    expect(list.tail.value).toBe(2);
    expect(list.tail.previous.value).toBe(1);
  });
});
