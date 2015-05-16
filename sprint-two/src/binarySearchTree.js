var BinarySearchTree = function(value){
  var tree = Object.create(bTreeMethods);
  tree.value = value;
  return tree;
};

  var bTreeMethods = {};
  bTreeMethods.insert = function(value) {
    if(value < this.value) {
      if (this.left === undefined) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if(this.right === undefined) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }

    };
  };
  bTreeMethods.contains = function(target) {
    var containsTarget = false;

    var search = function(node) {
      debugger;
      if (node.value === target) {
        containsTarget = true;
      } else if (node.value < target) {
        return search(node.right);
      } else {
        return search(node.left);
      }
    }

    search(this);
    return containsTarget;

  };
  bTreeMethods.depthFirstLog = function(){

  };




/*
 * Complexity: What is the time complexity of the above functions?
 */
