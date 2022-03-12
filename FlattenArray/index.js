const arr = [
  [1, 2],
  [3, 4],
  [10, 5, [3, 6, 9]],
];

const customizedFlat = (arr, depth = 1) => {
  let res = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele) && depth >= 1)
      res.push(...customizedFlat(ele, depth - 1));
    else res.push(ele);
  });
  return res;
  console.log(this);
};

const ans = customizedFlat(arr, 2);
console.log(ans);
