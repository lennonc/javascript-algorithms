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
  });
});
