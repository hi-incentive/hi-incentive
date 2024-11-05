$(document).ready(function () {
  $("#open-menu").click(() => {
    $(".menu-mobile").toggleClass("hide");
    $(".menu-mobile-drawer").toggleClass("active");
    $("header").css("background-color", "rgba(50, 50, 50, 0.2)");
  });
  $("#close-menu").click(() => {
    $(".menu-mobile").toggleClass("hide");
    $(".menu-mobile-drawer").toggleClass("active");
    $("header").css("background-color", "white");
  });

  var acc = document.getElementsByClassName("faq-accordion-item-head");

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // Get the modal
  var modal = document.getElementById("myModal");

  $(".open-modal").each(function () {
    $(this).on("click", function () {
      if ($("#myModal").css("display") === "none") {
        $("#myModal").css("display", "block");
      } else {
        $("#myModal").css("display", "none");
      }
    });
  });
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-modal")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  $(".benefits-list").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dotsClass: "benefits-list-indicators",
    infinite: true,
  });
});
