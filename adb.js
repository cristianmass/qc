var elc = document.createElement("div");
elc.setAttribute("id", "pubbc");
elc.setAttribute('style', 'position:fixed;bottom:0;padding-bottom:63px;padding-top:2px;width:30px;height:10px;text-align:center;background-color:#fff;color:#aaa;z-index:999;font-size:18px;border-top:1px solid #ddd;border-right:1px solid #ddd;border-top-right-radius: 10px 10px;');
elc.innerHTML = "X";
elc.onclick = function() { clel2() };
document.body.appendChild(elc);
function clel2(){ container2.style.display = 'none'; elc.style.display = 'none'; } 

var el2 = document.createElement("div");
el2.className = "pubb";
el2.setAttribute("id", "pubb");
el2.setAttribute('style', 'position:fixed;bottom:0;width:100%;max-width:100%;height:50px;min-height:50px;max-height:50px;overflow:hidden;text-align:center;background-color:#fff;z-index:999;');
document.body.appendChild(el2);

window.google_ad_client = "ca-pub-2798039503267759";
window.google_ad_slot = "1878822216";
window.google_ad_display = "inline-block";
window.google_ad_width = 336;
window.google_ad_height = 50; 
var container2 = document.getElementById('pubb');

var w2 = document.write;
document.write = function (content2) {
    container2.innerHTML = content2;
    document.write = w2;
};
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://pagead2.googlesyndication.com/pagead/show_ads.js';
document.body.appendChild(script);
