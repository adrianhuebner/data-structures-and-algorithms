class HashTable{
  constructor(size){
    this.data = new Array(size);
  }
  _hash(key){
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
  return hash;
  } // 0(1)

  _add(key, value){
    let address = this._hash(key)
    if(!this.data[address]){
      this.data[address] = [];
    }
      this.data[address].push([key, value]);
      return this.data
  } // 0(1)

  _get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket.length){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  } // 0(1) if no collisions, 0(n)
}

const myHashTable = new HashTable(100);
myHashTable._hash('grapes')
