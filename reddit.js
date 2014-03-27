chrome.omnibox.onInputEntered.addListener(
	function(text) {
 		var qString = "http://reddit.com/r/"+encodeURIComponent(text);  
   		chrome.tabs.query({'currentWindow': true, 'active': true}, function(tab) { 
    	chrome.tabs.update(tab[0].id, {"url": qString });
   		});
});