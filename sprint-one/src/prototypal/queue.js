var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var instance = Object.create(queueMethods);
   instance.length = 0;
   return instance;

};

var queueMethods = {};
queueMethods.size = function() {
  return this.length;
}
queueMethods.enqueue = function(value) {
  this.length++;
}
queueMethods.dequeue  = function() {
  this.length--;
}


