var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var oldValue = this.tail;
    this.tail = Node(value);

    //add node to tail
    if (this.head === null) {
      this.head = ;
    } else {
      this[oldValue].next = this.tail;
    }
    //store previous tail
      //point it to new tail

  };

  list.removeHead = function(){
    var head = this.head.value;
    this.head = this.head.next;
    return head;
  };

  list.contains = function(target){
    for (var key in this) {
      if (key.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
