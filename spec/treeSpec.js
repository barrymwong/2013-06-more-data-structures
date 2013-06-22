describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add the first node with properties value and children", function() {
    //debugger;
    expect(tree.value).toEqual(undefined);
    //expect(tree.children).toEqual([]);
  });

  it("should add a child node to the parent", function() {
    tree.addChild(10);
    expect(tree.children[0].value).toEqual(10);
  });

  it("should add multiple children to parent", function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    expect(tree.children[0].value).toEqual(1);
    expect(tree.children[1].value).toEqual(2);
    expect(tree.children[2].value).toEqual(3);
  });

  it("should add grandchildren to parent", function() {
    tree.addChild(1);
    tree.children[0].addChild(10);
    expect(tree.children[0].children[0].value).toEqual(10);
  });
  // Add more tests here to test the functionality of tree.

  it("should recurse through tree to find value", function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(10);
    tree.children[0].children[0].addChild(100);
    //console.log(tree.children[0].children[0].children[0].value);
    expect(tree.contains(10)).toEqual(true);
  });

});