var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v;

    if (this._storage.get(i) === undefined || this._storage.get(i) === null) {
      this._storage.set(i, obj);
    } else {
      var existing = this._storage.get(i);
      _.extend(existing, obj);
    }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var emptyObj = {};
  emptyObj[k] = null;
  this._storage.set(i, emptyObj);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
