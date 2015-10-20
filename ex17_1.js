function getAuthorInfo(mediaType) {
  var req = new XMLHttpRequest();
  req.open("GET", "http://eloquentjavascript.net/author", false);
  req.setRequestHeader("Accept", mediaType);
  req.send(null);
  console.log(req.responseText);
}

getAuthorInfo("text/plain");
getAuthorInfo("text/html");
getAuthorInfo("application/json");
getAuthorInfo("application/rainbows+unicorns");
