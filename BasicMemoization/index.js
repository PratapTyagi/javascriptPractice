function memoizedFunction(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn.call(this, ...args);
    }
    return cache[key];
  };
}

function clumpsyProduct(a, b) {
  for (let i = 0; i < 1000000000; i++) {}
  return a * b;
}

const memoizedProduct = memoizedFunction(clumpsyProduct);

console.time("First");
console.log(memoizedProduct(10, 30));
console.timeEnd("First");
console.time("second");
console.log(memoizedProduct(10, 30));
console.timeEnd("second");
