describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("insert a new string at the given index", function() {
    hashTable.insert('hey');
    expect(hashTable._storage.get(6)).toEqual('hey');
  });

  // add more tests here to test the functionality of hashTable
});