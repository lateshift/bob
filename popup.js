
function click(e) {
  chrome.tabs.executeScript(null,{code:"hello()"});
  window.close();
}

function handleBtnLaunch(e) {
  chrome.tabs.executeScript(null,{code:"launch()"});
  window.close();
}


document.addEventListener('DOMContentLoaded', function () {
  	var button = document.getElementById("btnDump");
	button.addEventListener('click', click);

  	var btnLaunch = document.getElementById("btnLaunch");
	btnLaunch.addEventListener('click', handleBtnLaunch);
});
