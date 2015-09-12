var size = 8;
for (var lines = 0, board = ""; lines < size; lines++) {
  var line = "";
  if (lines % 2 == 0)
    var firstChar = " ", secondChar = "#";
  else
    var firstChar = "#", secondChar = " ";
  while (line.length < size) {
    if (line.length % 2 == 0)
      line += firstChar;
    else
      line += secondChar;
  };
  board += line + "\n";
};
console.log(board);
