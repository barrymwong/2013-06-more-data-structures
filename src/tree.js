// A tree class, in functional with shared methods style, with the following properties:

// .children property, an array containing a number of subtrees

// .addChild() method, takes any value, sets that as
// the target of a node, and adds that node as a child of the tree

// A .contains() method, takes any input and returns a boolean
// reflecting whether it can be found as the value of the
// target node or any descendant node

var makeTree = function(val){
  var newTree = {};
  newTree.value = val;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  this.children.push(makeTree(val)); // change to push.()
};

treeMethods.contains = function(val){
  var node = this.children;
  var sub = function(node) {
    for(var i = 0; i < node.length; i++) {
      if(node[i].value === val){
        return true;
      } else if(node[i].children) {
        return sub(node[i].children);
      }
      return false;
    }

  };
  return sub(node);
};






/*
1 Be able to add an initial node.
   Create a new object that contains a value property and a children property.
     The value property should contain a passed in value.
     The children property should equal an empty array.

2 Then add child node to the parent node's children property.
    Repeat step 1 to create new child node.
    Push the new child node to the empty array in the parent's next property
3 Find a specific value in the node tree
  recursively look for the value similiarly to linked list
    iterate over the first element in the children array and recurse down the tree
    iterate over the next element in the children array down the tree
    etc.
*/