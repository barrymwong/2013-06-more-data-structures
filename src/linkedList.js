// A linkedList class, in functional style, with the following properties:

// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether
//or not the passed-in value is in the linked list

// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {
    head: null,
    tail: null,
    addToTail: function(value){
      // tail should be most recent node
      if(list.tail !== null){
        list.tail.next = makeNode(value);
        list.tail = list.tail.next;
      } else {
        list.tail = makeNode(value);
      }
      // if head doesn't exist, then set the head to tail (only for the first head)
      if(!list.head) {
        list.head = list.tail;
      }

      return list.tail;
    },

    removeHead: function(){
      var temp = list.head;
      list.head = list.head.next;
      delete temp;
    },

    contains: function(search){
      var searchNext = list.head;

      var sub = function(param){
        var searchNext1 = param;
        if(searchNext1.value !== search && searchNext1.next !== null){
          return sub(searchNext1.next);
        } else if(searchNext1.value === search) {
          return true;
        } else {
          return false;
        }
      };
      return sub(searchNext);
    }

  };

  return list;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  return newNode;
};
