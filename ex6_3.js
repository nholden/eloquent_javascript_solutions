function logFive(sequence) {
  for (i = 0; i < 5 && sequence.hasNext(); i++) {
    console.log(sequence.next());
  }
}

function ArraySeq(array) {
  this.elements = array;
  this.location = -1;
}
ArraySeq.prototype.hasNext = function() {
  if (this.elements[this.location+1])
    return true;
  else
    return false;
}
ArraySeq.prototype.next = function () {
  this.location += 1;
  return this.elements[this.location];
};

function RangeSeq(from, to) {
  this.elements = []
  for (i = from; i < to; i ++) {
    this.elements.push(i);
  }
  this.location = -1;
}
RangeSeq.prototype = ArraySeq.prototype;

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
