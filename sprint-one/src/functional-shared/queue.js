var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  length: 0,
  size: function(){
    return this.length;
  },
  push: function(value) {
    this.length++;
  }
};



