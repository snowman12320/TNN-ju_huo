// go to top
// call to action
function showArrow() {
  if ($(this).scrollTop() > 500) {
    $("#arrow_up").fadeIn();
  } else {
    $("#arrow_up").fadeOut();
  }
}
$(window).scroll(showArrow);
