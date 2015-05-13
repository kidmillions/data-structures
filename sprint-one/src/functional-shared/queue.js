var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    start: 0,
    end: 0
  };
  extend(someInstance, queueMethods);
  return someInstance;
};
var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
};
var queueMethods = {

  size: function(){
    var size = this.end - this.start;
    if(size < 0) {
      size = 0;
    }
    return size;
  },
  enqueue: function(value) {
    this.storage[this.end] = value;
    this.end++;
  },
  dequeue: function() {
    var result = this.storage[this.start];
    this.start++;
    return result;
  }
};



