describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("insert a key and value", function() {
    hashTable.insert('greeting', 'hey');
    hashTable.insert('formal greeting', 'hello');
    expect(hashTable.retrieve('greeting')).toEqual('hey');
    expect(hashTable.retrieve('formal greeting')).toEqual('hello');
  });

  it("use retrieve to find a value", function() {
    hashTable.insert('greeting', 'hey');
    hashTable.insert('formal greeting', 'hello');
    expect(hashTable.retrieve('formal greeting')).toEqual('hello');
  });

  it("should remove an element", function() {
    hashTable.insert('hey'); // 6
    hashTable.insert('hello'); // 4
    hashTable.remove('hello');
    expect(hashTable.retrieve(4)).toEqual('hello');
  });

  // add more tests here to test the functionality of hashTable
});