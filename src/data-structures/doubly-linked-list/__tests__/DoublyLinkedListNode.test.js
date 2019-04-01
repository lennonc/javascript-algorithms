import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('DoublyLinkedListNode', () => {
  it('should create a new list node', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should link two nodes together', () => {
    const node2 = new DoublyLinkedListNode(2);
    const node1 = new DoublyLinkedListNode(1, node2);
    const node3 = new DoublyLinkedListNode(10, node1, node2);

    expect(node1.next).toBeDefined();
    expect(node1.previous).toBeNull();
    expect(node2.next).toBeNull();
    expect(node2.previous).toBeNull();
    expect(node3.next).toBeDefined();
    expect(node3.previous).toBeDefined();
    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
    expect(node3.next.value).toBe(1);
    expect(node3.previous.value).toBe(2);
  });

  it('should create a node with an object', () => {
    const obj = { key: 1, value: 'test1' };
    const node = new DoublyLinkedListNode(obj);

    expect(node.value.key).toBe(1);
    expect(node.value.value).toBe('test1');
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });

  it('should covert a node to a string', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.toString()).toBe('1');
    node.value = 'string';
    expect(node.toString()).toBe('string');
  });

  it('should convert node to string with a custom stringifier', () => {
    const nodeValue = { key: 1, value: 'test1' };
    const node = new DoublyLinkedListNode(nodeValue);

    const toStringCallback = value => `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe('value: test1, key: 1');
  });
});
