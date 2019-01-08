// Check to see if a string has the same amount of 'x's and 'o's. The method must
// return a boolean and be case insensitive.The string can contain any char.
function XO(str) {
  let xCount = 0;
  let oCount = 0;

  str.split('').forEach(function (letter) {
    if (letter.toLowerCase() === 'x') {
      xCount += 1;
    } else if (letter.toLowerCase() === 'o') {
      oCount += 1;
    }
  });

  return xCount === oCount;
}