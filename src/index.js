module.exports = function check(str, bracketsConfig) {
  const arr = [];

  const brackets = new Map(bracketsConfig);

  for (const bracket of str) {
    if (bracket === brackets.get(arr[arr.length - 1])) {
      arr.pop();
    } else {
      arr.push(bracket);
    }
  }

  return arr.length === 0;
};
