module.exports = function reverse (n) {
    // number to string
  let str = n.toString();
    // string to array
  let arr = str.split("");
    // reverse array
  arr = arr.reverse();
    // array to string
  str = arr.join("");
    // string to number
  let rev = parseInt(str);
  return rev;
}
