var Queue = function() {

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
  this.storage = {};


};




Queue.prototype.size = function() {
  var length = this.end - this.start;
  if (length < 0) {
    length = 0;
  }
  return length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {

  this.start++;
  return this.storage[this.start - 1];
};
