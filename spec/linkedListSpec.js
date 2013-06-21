describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });


   // add more tests here to test the functionality of linkedList
  it("should add a new node to the end of the linked list", function() {
    linkedList.addToTail(10);
    linkedList.addToTail(100);
    linkedList.addToTail(1000);

    expect(linkedList.tail).toEqual({value: 1000, next: null});
  });

  it("should have head remain as the first node added", function() {
    linkedList.addToTail(10);
    linkedList.addToTail(100);
    linkedList.addToTail(1000);

    expect(linkedList.head).toEqual({value: 10, next: null});
  });
     // add more tests here to test the functionality of linkedList
  it("should add a new node to the end of the linked list", function() {
    linkedList.addToTail(10);

    expect(linkedList.addToTail(100)).toEqual({value: 100, next: null});
  });

});