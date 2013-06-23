var HashTable = function(){
  this._limit = 8;
  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(value, this._limit);
  this._storage.set(index, [key, value]);
};

HashTable.prototype.retrieve = function(key){
  for(var i = 0; i < this._limit; i++ ){
    if(this._storage.get(i) && this._storage.get(i)[0] === key) {
      return this._storage.get(i)[1];
    }
  }
};

HashTable.prototype.remove = function(value){
  var index = getIndexBelowMaxForKey(value, this._limit);
  delete this._storage[index];
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you