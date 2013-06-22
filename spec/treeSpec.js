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
    var a = tree.addChild(10);
    expect(a.value).toEqual(10);
    //expect(tree.children).toEqual([]);
  });

  it("should add a child node to the original parent", function() {
    tree.addChild(10);
    tree.addChild(100);
    expect(tree.children.value).toEqual(100);
  });

  // Add more tests here to test the functionality of tree.
});