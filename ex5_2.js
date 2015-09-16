function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDifferences = [];
ancestry.forEach(function(person) {
  if (byName[person.mother])
    ageDifferences.push(person.born - byName[person.mother].born);
});
console.log(average(ageDifferences));

// → 31.2
