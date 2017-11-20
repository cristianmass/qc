function hea(){ 
  var hea = document.getElementById('hea').innerHTML;
            document.getElementById('hea2').innerHTML = hea;
             var elem = document.getElementById("hea");
 document.getElementById("hea").parentElement.removeChild(elem);
             }

function shsearch() {
      
      if (document.getElementById("search").style.display == "block") 
      {
        document.getElementById('search').style.display = 'none';
        document.getElementById('search').style.visibility = 'none';
        document.getElementById('ist').blur();
        document.getElementById('ist').value = '';
        document.getElementById('show_res').innerHTML = '';
       }
      else 
      {
        document.getElementById('search').style.display = 'block';
        document.getElementById('search').style.visibility = 'visible';
        document.getElementById('ist').focus(); 
      }
        
    }

function loadDoc() { 
  document.getElementById('show_res').style.display = "block";
  var vals = document.getElementById('ist').value;
  var url = "http://cryptocurrencyes.com/searches/?qstr="+vals;
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("show_res").innerHTML = xhttp.responseText;
}

addEventListener("load",function(){
    var links= document.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        links[i].addEventListener("click",function(e){
        window.location = this.getAttribute("href");
        e.preventDefault();
        })
    }
}); 
