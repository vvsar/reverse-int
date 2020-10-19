module.exports = function reverse (n) {
  let str = n.toString();
  let arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  let rev = parseInt(str);
  return rev;
}
