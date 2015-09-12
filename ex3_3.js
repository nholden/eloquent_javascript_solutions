function countBs(string) {
  var count = 0;
  for (var n = 0; n < string.length; n++) {
    if (string.charAt(n) == "B")
      count += 1;
  }
  return count;
};

function countChar(string, character) {
  var count = 0
  for (var n = 0; n < string.length; n++) {
    if (string.charAt(n) == character)
      count += 1;
  }
  return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
