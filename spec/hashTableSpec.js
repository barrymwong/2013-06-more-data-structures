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
    hashTable.insert('hello');
    expect(hashTable._storage.get(6)).toEqual('hey');
    expect(hashTable._storage.get(4)).toEqual('hello');
  });

  it("insert a new string at the given index", function() {
    hashTable.insert('hey'); // 6
    hashTable.insert('hello'); // 4
    expect(hashTable.retrieve(4)).toEqual('hello');
  });

  // add more tests here to test the functionality of hashTable
});