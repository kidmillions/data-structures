var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this.limit);
  var bucket = [];
  var tuple = [k, v];
  if (this._storage.get(i)) {
    bucket = this._storage.get(i);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        this._storage.set(i, bucket);
        return;
      }
    }
  }
  bucket.push(tuple);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this._storage.get(i);
  for(var i=0; i<bucket.length;i++) {
    if(bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this._storage.get(index);
  for(var  i= 0;i<bucket.length;i++) {
    if(bucket[i][0] === k) {
      bucket[i][1] = null;
    }
  }
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
