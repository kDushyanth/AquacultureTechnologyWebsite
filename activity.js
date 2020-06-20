$(document).ready(function(){
  $("p").click(function(){
    var curr = $(this).next();
    if( curr.css("display")=="none")  curr.css({"display":"block"});
    else{
      curr.css({"display":"none"});
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
