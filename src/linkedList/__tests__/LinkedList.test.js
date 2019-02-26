import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create a new linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);

    linkedList.append(1);
    linkedList.append(5);

    expect(linkedList.toString()).toEqual('1,5');
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.tail.value).toEqual(5);
    expect(linkedList.tail.next).toBe(null);
  });

  it('should prepend a node to linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    list.prepend(1);
    list.prepend(5);

    expect(list.toString()).toEqual('5,1');
  });

  it('should delete any node by value from a linked list', () => {
    const list = new LinkedList();

    expect(list.delete(5)).toBeNull();

    list.append(1);
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(3);
    list.append(3);
    list.append(4);
    list.append(5);

    expect(list.head.toString()).toBe('1');
    expect(list.tail.toString()).toBe('5');

    const deleteNode = list.delete(3);
    expect(deleteNode.value).toBe(3);
    expect(list.toString()).toBe('1,1,2,4,5');

    list.delete(1);
    expect(list.toString()).toBe('2,4,5');

    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(5);
  });
});
