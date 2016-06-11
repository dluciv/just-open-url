(function(){
  var wsh = WScript.CreateObject("WScript.Shell");
  var parm = WScript.Arguments.Item(0);
  // be secure about allowed protocols
  var rmatch = parm.match(/^just-open:((http:\/\/|https:\/\/|ftp:\/\/|gopher:\/\/|xmpp:|magnet:|mailto:).+)$/);
  if(rmatch) {
    var target = rmatch[1];
    // WScript.Echo(target);
    wsh.Run(target);
  } else {
    WScript.Echo("Unknown protocol in argument:\n" + parm);
  }
})();
