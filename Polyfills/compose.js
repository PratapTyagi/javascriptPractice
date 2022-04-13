const composePolyfill = function (...func) {
  return (...args) => func.reduce((acc, fu) => fu(acc), args[0]);
};

const result = composePolyfill(addTwo, multiplyFour, divideFive);
console.log(result(2));
