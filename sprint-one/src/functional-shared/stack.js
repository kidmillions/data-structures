var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  storage: {},
  length: 0,
  size: function() {
    return this.length;
  },
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    var result = this.storage[this.length - 1];
    this.length--;
    if (this.length < 0) {
      this.length = 0;
    }
    delete this.storage[this.length];
    return result;
  }
};


