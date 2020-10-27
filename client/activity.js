$(document).ready(function(){
  $("p").append("<span class=\"status\">+</span>")
  $("p").click(function(){
    var curr = $(this).next();
    if( curr.css("display")=="none")
     {
       curr.css({"display":"block"});
       $(this).css({"color":"silver"});
       $(this).find(".status").html("-");
     }
    else{
      curr.css({"display":"none"});
      $(this).css({"color":"yellow"});
      $(this).find(".status").html("+");
    }
   });
var scroller = document.getElementById("scrollUp");
window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scroller.style.display = "block";
  } else {
    scroller.style.display = "none";
  }
}
scroller.addEventListener("click",function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
var contact = document.getElementsByClassName("contactbutton");
contact[0].addEventListener("click",function () {
  var scrollingElement = (document.scrollingElement || document.body);
scrollingElement.scrollTop = scrollingElement.scrollHeight;
});
});
