//Problem 133. CloneGraph

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

//example 1.

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

var cloneGraph = function (node) {
  //check to see if node is null
  if (node === null) {
    return;
  }

  //Declare hashmap
  const newNode = new Map();

  function dfs(currentNode) {
    //base case, if currentNode has already been mapped, exit function and return existing clone.
    if (newNode.has(currentNode)) {
      return newNode.get(currentNode);
    }
    //if currentNode hasn't been set continue. Define clone.
    const clone = new Node(currentNode.val);

    newNode.set(currentNode, clone);

    //itterate all neighbors of current clone
    for (const neighbor of currentNode.neighbors) {
      //get cloned version of neighbors
      const neighborClone = dfs(neighbor);

      //link the cloned neighbors to current clone
      clone.neighbors.push(neighborClone);
    }
    return clone;
  }
  return dfs(node);
};
