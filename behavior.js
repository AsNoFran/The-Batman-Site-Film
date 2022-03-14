document.addEventListener("DOMContentLoaded", function(event) {

var thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function() {
  if (thumbnailElement.className  == "small")
    thumbnailElement.className  = "";
  else
    thumbnailElement.className = "small";


});


});

mydiv = document.getElementById('disqus_thread');
while (mydiv.firstChild) {
mydiv.removeChild(mydiv.firstChild);
}
var disqus_shortname = "sample-shortname";
var disqus_url = "sample-url";
var disqus_identifier = "sample-identifier";
var disqus_loaded = false;
            

function disqus() {          
     if (!disqus_loaded)  {
          disqus_loaded = true;
          var e = document.createElement("script");
          e.type = "text/javascript";
          e.async = true;
          e.src = "//" + disqus_shortname + ".disqus.com/embed.js";
          (document.getElementsByTagName("head")[0] 
          ||document.getElementsByTagName("body")[0]).appendChild(e);
     }
}