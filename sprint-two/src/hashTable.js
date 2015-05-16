var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this.limit);

    var bucket = [];
    var tuple = [k,v];
    bucket.push(tuple);
    this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this.limit);
  // //get bucket
  var bucket = this._storage.get(i);
  for(var i=0; i<bucket.length;i++) {
    if(bucket[i][0] === k) {
      return bucket[i][1];
    };
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this._storage.get(i);

  // this._storage.each(function(bucket) {
  //   for(var i = 0;i<bucket.length;i++) {
  //     if(bucket[i][0] === k) {
  //       bucket[i][1] = null;
  //       var result = bucket;
  //               console.lot(result);

  //     }
  //   }
  // })
  this_.storage.set(i, result);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
