var butop = document.createElement("button");
butop.setAttribute("id", "butop");
document.body.appendChild(butop);
var myb = document.getElementById("butop");
myb.style = "display:block;position:fixed;bottom:70px;right:10px;width:40px;height:35px;z-index:99;font-size:30px;padding:3px 3px 0px 3px;background-color:#333;color:#eee;cursor:pointer;border:none;outline:none;border-radius:2px;";
myb.innerHTML = "^";
myb.onclick = topf;

function topf() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
