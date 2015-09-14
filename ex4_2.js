function reverseArray(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++)
    newArray.unshift(array[i]);
  return newArray;
};

function reverseArrayInPlace(array) {
  for (i = 0; i < array.length; i++) {
    array.unshift(array[i]);
    array.splice(i+1, 1);
  };
  return array;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
