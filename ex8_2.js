function withBoxUnlocked(body) {
  try {
    var originallyLocked = box.locked;
    box.unlock();
    return body();
  } finally {
    if (originallyLocked)
      box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
