const Queue = require('./queueWithStacks').pseudo;
let queue = new Queue();


describe('Test Challenge #1', () => {
  it('Can push a new value onto the queue', () => {
    queue.enqueue(10);
    expect(queue.stackOne.storage).toEqual([10])
  });
});

describe('Test Challenge #2', () => {
  it('Can use the dequeue properly', () => {
    queue.enqueue(20);
    queue.enqueue(30);
    queue.dequeue();
    expect(queue.stackOne.storage).toEqual([]);
    expect(queue.stackTwo.storage).toEqual([30,20]);
  });
});
