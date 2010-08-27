
// JSM exported symbols
var EXPORTED_SYMBOLS = ["GM_installUri"];

const Cu = Components.utils;
Cu.import("resource://scriptish/constants.js");

function GM_installUri(uri) {
  var win = Cc['@mozilla.org/appshell/window-mediator;1']
      .getService(Ci.nsIWindowMediator)
      .getMostRecentWindow("navigator:browser");

  if (win && win.GM_BrowserUI) {
    win.GM_BrowserUI.startInstallScript(uri);
    return true;
  }
  return false;
}