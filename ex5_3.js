function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function bornInDecade(decade) {
  return ancestry.filter(function(person) {
    return Math.ceil(person.died / 100) == decade;
  });
}

var lifeExpectancyByDecade = {};

for (var decade = 16; decade < 22; decade++) {
  var ages = [];
  bornInDecade(decade).forEach(function(person) {
    ages.push(person.died - person.born);
  });
  lifeExpectancyByDecade[decade] = average(ages);
}

console.log(lifeExpectancyByDecade);

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
