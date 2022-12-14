// 支援 module 語法的新瀏覽器
//<script type="module" src="index.js"></script>
//不支援 module 語法此段會被新型瀏覽器忽略
//<script nomodule src="index.js"></script>

$(document).ready(function () {
  // go top
  function showArrow() {
    if ($(this).scrollTop() > 500) {
      $("#arrow_up").fadeIn();
    } else {
      $("#arrow_up").fadeOut();
    }
  }
  $(window).scroll(showArrow);

  // scroll down
  let height = $(window).height();
  function showArrowDown() {
    console.log(height);
    if ($(this).scrollTop() < height / 2) {
      $("#arrow_down").fadeIn(1000);
    } else {
      $("#arrow_down").fadeOut(1000);
    }
  }
  $(window).scroll(showArrowDown);
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
