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

  it('should prepend a node to the list', () => {
    const list = new DoublyLinkedList();

    list.prepend(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);

    list.prepend(2);
    expect(list.head.value).toBe(2);

    expect(list.tail.previous.value).toBe(2);
    expect(list.toString()).toBe('2,1');
  });

  it('should convert a list to a string', () => {
    const list = new DoublyLinkedList();

    list.append(1).append(2).append(3).append(3);
    expect(list.toString()).toBe('1,2,3,3');
  });

  it('should delete a node by value', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');

    const deletedNode = linkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.tail.previous.previous.value).toBe(2);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.head.next.next).toBe(linkedList.tail);
    expect(linkedList.tail.previous.previous).toBe(linkedList.head);
    expect(linkedList.tail.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');
    expect(linkedList.head).toBe(linkedList.tail);

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  it('should find a node in a linked list', () => {
    const list = new DoublyLinkedList();
    expect(list.find({ value: 5 })).toBeNull();

    list.append(1).append(2).append(3);

    expect(list.find({ value: 4 })).toBeNull();
    expect(list.head.value).toBe(1);
    expect(list.find({ value: 1 }).value).toBe(1);
  });

  it('should find a node in a linked list using a callback', () => {
    const list = new DoublyLinkedList();

    list
      .append({ value: 1, key: 'test1' })
      .append({ value: 2, key: 'test2' })
      .append({ value: 3, key: 'test3' });

    const node = list.find({ callback: value => value.key === 'test3' });
    expect(node).toBeDefined();
    expect(node.value.value).toBe(3);
    expect(list.find({ callback: value => value.key === 'test5' })).toBeNull();
  });
});
