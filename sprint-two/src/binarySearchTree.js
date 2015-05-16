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
      if (node.value === target) {
        containsTarget = true;
      } else if (node.value < target) {
        if(node.right!==undefined)  {
          return search(node.right);
        }

      } else {
        if (node.left !== undefined) {
          return search(node.left);
        }
      }
    }

    search(this);
    return containsTarget;

  };
  bTreeMethods.depthFirstLog = function(cb){
      //define inner function
      var search = function(node) {
        cb(node.value);
        if(node.right===undefined && node.left===undefined) {
          return;
        } else {
          if(node.right!==undefined) {
            return search(node.right);
          }
          if(node.left!==undefined) {
            return search(node.left);
          }
        }
      };
      search(this);
  };






/*
 * Complexity: What is the time complexity of the above functions?
 */
