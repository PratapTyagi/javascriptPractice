const addTwo = (a) => {
  return a + 2;
};

const multiplyFour = (a) => {
  return a * 4;
};

const divideFive = (a) => {
  return a / 5;
};

const pipePolyfill = (...func) => {
  return (...args) =>
    func.reduceRight((accumulator, fn) => fn(accumulator), args[0]);
};

const res = pipePolyfill(addTwo, multiplyFour, divideFive);
console.log(res(3));
