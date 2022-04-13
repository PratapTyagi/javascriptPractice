Array.prototype.filterPolyfill = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++)
    if (cb(this[i], i, this)) res.push(this[i]);
  return res;
};

let a = [5, 4, 3, 2, 1];
const filteredResult = a.filterPolyfill((d) => d > 2);
console.log(a, filteredResult);
