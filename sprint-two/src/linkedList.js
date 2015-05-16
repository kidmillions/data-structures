var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // debugger;
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
    }
    this.tail = newNode;
  };

  list.removeHead = function(){
    var head = this.head.value;
    if (this.head.next === null) {
      this.head = null;
      return head;
    }
    this.head = this.head.next;
    this.head.previous = null;
    return head;
  };

  list.contains = function(target){
    var search = function(node) {
      if (_.isEqual(node.value,target) ) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return search(node.next);
      }
    };
    return search(this.head);
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (this.head !==null) {
      newNode.next = this.head;
      this.head.previous = newNode;
    }
      this.head = newNode;
  };

  list.removeTail = function() {
    var tail = this.tail.value;
    if (this.tail.previous ===null) {
      this.tail = null;
      return tail;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;
    return tail;
  }

  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
