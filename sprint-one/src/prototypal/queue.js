var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var instance = Object.create(queueMethods);
   instance.start = 0;
   instance.end = 0;
   instance.storage = {};
   return instance;

};

var queueMethods = {};
queueMethods.size = function() {
  var length = this.end - this.start;
  if(length < 0) {
    length = 0;
  }
  return length;
}
queueMethods.enqueue = function(value) {
  this.end++;
  this.storage[this.end] = value;
}
queueMethods.dequeue  = function() {

  this.start++;
  return this.storage[this.start];
}


