chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.create({ type: 'pannel',url: chrome.extension.getURL('notes.html'), width: 320, height: 480 });
});
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
    if (request.occurrance!==undefined){
          console.log('running')
      }
});