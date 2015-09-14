function range(start, end, increment) {
  var range = [];
  increment = increment || 1;
  if (increment > 0)
    for (i = start; i <= end; i += increment)
      range.push(i);
  else
    for (i = start; i >= end; i += increment)
      range.push(i);
  return range;
};

function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++)
    total += numbers[i];
  return total;
};

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
