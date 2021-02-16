var butop = document.createElement("div");
butop.setAttribute("id", "butop");
document.body.appendChild(butop);
var myb = document.getElementById("butop");
myb.style = "display:block;position:fixed;bottom:55px;right:0px;width:40px;height:35px;z-index:9999;font-size:30px;font-weight:bold;padding:3px 3px 0px 3px;filter: alpha(opacity=60);-moz-opacity: 0.6;opacity: 0.6;color:#eee;cursor:pointer;border:none;outline:none;padding:30px;";
myb.innerHTML = "<div id=\"buc\" style=\"width:40px;heigh:35px;background-color:#333;\">^</div>";
var mc = document.getElementById("buc");
mc.onclick = topf;
function topf() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
