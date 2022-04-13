Array.prototype.reducePolyfill = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (!accumulator) accumulator = this[i];
    else accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
};

let reduceArray = [5, 4, 3, 2, 1];
let resultReduce = reduceArray.reducePolyfill((acc, curr) => acc + curr);
console.log(resultReduce);
