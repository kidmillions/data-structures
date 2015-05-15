var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //create object
  var obj = {k: v};


    //check to see if index is null
    if (this.retrieve(i) === null) {

    //if null
      //insert/set object
      this._storage.set(i, obj);
    }

    //if !null
      //retrieve object that already exists at index
      //iterate / extend new object into old one
      //
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i[k], null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
