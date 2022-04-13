Array.prototype.mapPolyfill = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) res.push(cb(this[i], i, this));

  return res;
};

let arr = [5, 4, 3, 2, 1];
let mapRes = arr.mapPolyfill((d) => d * 2);
console.log(arr, mapRes);
