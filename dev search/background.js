// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    //suggest([
    //  {content: text + " one", description: "the first one"},
    //  {content: text + " number two", description: "the second entry"}
    //]);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
	var ind = text.indexOf(" ");
	var key = text.substr(0, ind);
	var val = text.substr(ind+1)
	var q;
	switch(key) {
		case "stack":
			q = "http://stackoverflow.com/search?q=";
			break;
		case "php":
			q = "http://us1.php.net/manual-lookup.php?scope=quickref&pattern=";
			break;
		case "msdn":
			q = "http://social.msdn.microsoft.com/Search/en-US?emptyWatermark=true&ac=4&query=";
			break;
		case "javascript":
			q = "https://developer.mozilla.org/en-US/search?q=";
			break;
		case "jquery":
			q = "http://api.jquery.com/?s=";
			break;
		case "java":
			q = "http://javadocs.org/";
			break;
		default:
			q = "https://www.google.com/#q=";
			break;
	}
	q += val;
	chrome.tabs.update({
     url: q
	});
  });
