var unit=document.getElementsByClassName("unit");
for( i=0;i<unit.length;i++){
    unit[i].addEventListener("click",function(){
    var topic = this.nextElementSibling;
      if (topic.style.display ==="block") {
          topic.style.display = "none";
      } else {
      topic.style.display = "block";
    }
    });
}
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
