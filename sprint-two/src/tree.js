var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);


  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};




treeMethods.contains = function(target){

  var containsTarget = false;




  var searchTree = function(node) {
    if (node.value === target) {
      containsTarget = true;
    } else if (node.children.length === 0) {
      return;
    } else {
      //loop through node's children
      for (var i = 0; i < node.children.length; i++) {
        searchTree(node.children[i]);
        //search the tree recursively for each child
      }
    }
  };

  searchTree(this);
  return containsTarget;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
