chrome.runtime.onInstalled.addListener(() => {
	console.log('Extensionz installed !');
});

chrome.action.onClicked.addListener((tab) => {
	console.log("Clicked tab : :", tab);
});
