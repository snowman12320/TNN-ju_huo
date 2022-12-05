// 支援 module 語法的新瀏覽器 
//<script type="module" src="index.js"></script>
//不支援 module 語法此段會被新型瀏覽器忽略 
//<script nomodule src="index.js"></script>

$(document).ready(function () {
  function showArrow() {
    if ($(this).scrollTop() > 500) {
      $("#arrow_up").fadeIn();
    } else {
      $("#arrow_up").fadeOut();
    }
  }
  $(window).scroll(showArrow);
});

