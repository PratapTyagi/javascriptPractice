const func = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  div(a) {
    this.total /= a;
    return this;
  },
};

console.log(func.add(5).multiply(10).div(5).total);
