const arr = [1, , 5, 6];



// const result = arr.map(sum.add, sum);
// console.log(result);

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback != "function") {
    throw new TypeError("my map method only takes function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if(this[i]){

        result[i]=callback.call(thisArg, this[i], i, this)
    }
  }
  return result;
};

const sum = {
  number: 10,
  add: function (num) {
    return this.number + num;
  },
};

const meth = arr.myMap(sum.add, sum)
console.log(meth)
