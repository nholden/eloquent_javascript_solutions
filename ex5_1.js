var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(flattened, array) {
  return flattened.concat(array);
}));
// → [1, 2, 3, 4, 5, 6]
