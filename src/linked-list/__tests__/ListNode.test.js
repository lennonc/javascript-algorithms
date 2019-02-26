import ListNode from '../ListNode';

describe('ListNode', () => {
  it('should create a new list node', () => {
    const node = new ListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create a node with an object', () => {
    const obj = { key: 'test', value: 1 };
    const node = new ListNode(obj);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new ListNode(2);
    const node1 = new ListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
  });

  it('should convert node to string', () => {
    const node = new ListNode(1);

    expect(node.toString()).toBe('1');

    node.value = 'string value';
    expect(node.toString()).toBe('string value');
  });

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new ListNode(nodeValue);
    const toStringCallback = value => `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
  });
});
