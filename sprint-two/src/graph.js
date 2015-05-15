

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {value:node, edges: {}};
};

Graph.prototype.contains = function(node){
    //if nodes contains node
  for (var key in this.nodes) {
    if (key === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
    //delete node
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.nodes[fromNode].edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



