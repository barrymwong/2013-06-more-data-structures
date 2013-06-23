describe("hashTable", function() {
  var vet;

  beforeEach(function() {
    vet = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(vet.insert).toEqual(jasmine.any(Function));
    expect(vet.retrieve).toEqual(jasmine.any(Function));
  });

  it("returns the value inserted at a given key, when retrieving from that same key", function() {
    vet.insert('greeting', 'hey');
    vet.insert('formal greeting', 'hello');
    expect(vet.retrieve('greeting')).toEqual('hey');
    expect(vet.retrieve('formal greeting')).toEqual('hello');
  });

  it("returns undefined when retrieving a key that was previously removed", function() {
    vet.insert('greeting', 'hey');
    vet.remove('greeting');
    expect(vet.retrieve('greeting')).toEqual(undefined);
  });

  // add more tests here to test the functionality of vet
});