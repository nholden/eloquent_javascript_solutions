function every(array, f) {
  var output = true;
  for (var i = 0; i < array.length; i++) {
    if (!f(array[i])) {
      output = false;
      break;
    }
  }
  return output;
}

function some(array, f) {
  var output = false;
  for (var i = 0; i < array.length; i++) {
    if (f(array[i])) {
      output = true;
      break;
    }
  }
  return output;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
