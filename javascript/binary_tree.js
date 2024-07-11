class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [1, 4, 7]
function oneToSeven() {
  const node1 = new Node(7);
  const node2 = new Node(4, null, node1)
  return new Node(1, null, node2);
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  const node1 = new Node(10);
  const node2 = new Node(45);
  const node3 = new Node(40, node1, node2);
  const node4 = new Node(50);

  return new Node(46, node3, node4);
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  const node1 = new Node(-20);
  const node2 = new Node(-17);
  const node3 = new Node(-19, node1, node2);
  const node4 = new Node(-15, node3);
  const node5 = new Node(1);
  const node6 = new Node(10);
  const node7 = new Node(2, node5, node6);

  return new Node(0, node4, node7);
}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
