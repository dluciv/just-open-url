// Run as Administrator!
(function(){
  var wsh = WScript.CreateObject("WScript.Shell");
  var scriptFile = wsh.CurrentDirectory + "\\just-open.js";
  wsh.RegWrite("HKEY_CLASSES_ROOT\\just-open\\", "URL:Default Browser protocol");
  wsh.RegWrite("HKEY_CLASSES_ROOT\\just-open\\URL Protocol", "");
  wsh.RegWrite("HKEY_CLASSES_ROOT\\just-open\\shell\\open\\command\\", 'wscript.exe "' + scriptFile + '" "%1"');
})();
