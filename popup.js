// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
// 	changeColor.style.backgroundColor = data.color;
// 	changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
// 	let color = element.target.value;
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.executeScript(
// 			tabs[0].id,
// 			{code: 'document.body.style.backgroundColor = "' + color + '";'});
// 	});
// };

// This callback function is called when the content script has been
// injected and returned its results
document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){
  var input = document.getElementById("userInput").value;
  var account = "https://" + input + ".talkdeskid.com"
  chrome.tabs.create({ url: account });
  // document.getElementById("content").innerHTML = "Logged In";
}


 var port = chrome.extension.connect({
      name: "Sample Communication"
 });
 port.postMessage("Hi BackGround");
 port.onMessage.addListener(function(msg) {
      console.log("Message recieved - Logged Into: " + msg);
      document.getElementById("body").style.height = "175px";
      // document.getElementById("body").style.width = "100px";
      document.getElementById("content").innerHTML = '<h4 style="color: #172241;">Logged Into: ' + msg + '</h4>';
 });