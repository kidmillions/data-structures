var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    start++;
    return storage[start-1];
  };

  someInstance.size = function(){
    var length = end - start;
    if(length<0) {
      length = 0;
    }
    return length;
  };

  return someInstance;
};
