const {shell} = require("electron");
var $ = require("jquery"); //I think const had some issues, right?
$(".external").click(function(){
   shell.openExternal($(this).data("target"));
})