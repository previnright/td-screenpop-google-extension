// chrome.runtime.onInstalled.addListener(function() {
// $.getScript('https://td-screenpop.herokuapp.com/socket.io/socket.io.js',function() {
var socket = io.connect('https://td-screenpop.herokuapp.com/');
socket.on('message', function(msg) {
	var s = JSON.parse(msg);
	var link = s.url;
	console.log(link);
    // chrome.tabs.getSelected(null,function(tab) {
    chrome.tabs.create( { url: link } );
    // });
});


// chrome.tabs.query({currentWindow: true}, function(tabs) {
//     tabs.forEach(function(tab) {
//         console.log('URL: ', tab.url);
//         var temp = new URL(tab.url);
//         var domain = temp.hostname;
//         console.log('Domain: ', domain);
// 		var check = domain.includes("mytalkdesk");
// 		console.log(check);
// 		if(check == true)
// 		{
// 			console.log('logged in');
// 		}
//     });
// });

chrome.extension.onConnect.addListener(function(port) {
      console.log("Connected .....");
      port.onMessage.addListener(function(msg) {
            console.log("message recieved" + msg);
			chrome.tabs.query({currentWindow: true}, function(tabs) {
			    tabs.forEach(function(tab) {
			        console.log('URL: ', tab.url);
			        var temp = new URL(tab.url);
			        var domain = temp.hostname;
			        console.log('Domain: ', domain);
					var check = domain.includes("mytalkdesk");
					console.log(check);
					if(check == true)
					{
						port.postMessage(domain);
					}
			    });
			});
      });
 })
// });
// });
// $.getScript('https://td-screenpop.herokuapp.com/socket.io/socket.io.js',function() {
// 	var socket = io.connect('https://td-screenpop.herokuapp.com/');
// 	socket.on('message', function(msg) {
// 		var s = JSON.parse(msg);
// 		var link = s.url;
// 		socket.send('hi');
// 	});
// });

// console.log('hi');

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.getSelected(null,function(tab) {
//         chrome.tabs.create( { url: "https://google.com"} );
//     });
// });