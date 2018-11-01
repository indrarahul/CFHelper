//author @Rahul Indra

chrome.runtime.onMessage.addListener(receiver);
function receiver(request, sender, sendResponse){
  // console.log(request);


  function textToClipboard (text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
  textToClipboard(request.toString());

}
