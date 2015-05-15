var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // var oldValue = this.tail;
    // this.tail = Node(value);

    // //add node to tail
    // if (this.head === null) {
    //   this.head = ;
    // } else {
    //   this[oldValue].next = this.tail;
    // }
    // //store previous tail
    //   //point it to new tail
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;


  };

  list.removeHead = function(){
    var head = this.head.value;
    this.head = this.head.next;
    return head;

  };

  list.contains = function(target){

    var search = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return search(node.next);
      }
    };
    return search(this.head);
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
