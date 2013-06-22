// A tree class, in functional with shared methods style, with the following properties:

// .children property, an array containing a number of subtrees

// .addChild() method, takes any value, sets that as
// the target of a node, and adds that node as a child of the tree

// A .contains() method, takes any input and returns a boolean
// reflecting whether it can be found as the value of the
// target node or any descendant node

var makeTree = function(){
  var newTree = {};
  Tree.value = undefined;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){
};

treeMethods.contains = function(){
};


/*
1 Be able to add an initial node.
   Create a new object that contains a value property and a chlidren property.
     The value property should contain a passed in value.
     The next property should equal an empty array.

2 Then add child node to the parent node's children property.
    Repeat step 1 to create new child node.
    Push the new child node to the empty array in the parent's next property
3 Find a specific value in the node tree
  recursively look for the value similiarly to linked list 
    iterate over the first element in the children array and recurse down the tree
    iterate over the next element in the children array down the tree
    etc.
*/