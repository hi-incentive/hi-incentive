$(document).ready(function () {
  $("#menu-icon").click(() => {
    $(".menu-nav").toggleClass("active");
  });

  var acc = document.getElementsByClassName("faq-accordion-item-head");

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
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

  $(".benefits-list.dk-lang").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "benefits-list-indicators",
    infinite: true,
  });

  $(".en-lang").each(function () {
    $(this).css("display", "none");
  });

  var lang = "danish";
  $("img[class$='flag danish']").css("background-color", "#5345bd");

  $(".menu-nav-lang-options").click(function () {
    if (lang == "danish") {
      lang = "english";
      $("img[class$='flag english']").css("background-color", "#5345bd");
      $("img[class$='flag danish']").css("background-color", "transparent");
      $(".dk-lang").each(function () {
        $(this).css("display", "none");
      });
      $("span.en-lang").each(function () {
        $(this).css("display", "inline");
      });
      $("section.en-lang").each(function () {
        $(this).css("display", "flex");
      });
      $(".benefits-list.dk-lang").slick("unslick");
      $(".benefits-list.en-lang").css("display", "block");
      $(".benefits-list.en-lang").slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "benefits-list-indicators",
        infinite: true,
      });
    } else {
      lang = "danish";
      $("img[class$='flag danish']").css("background-color", "#5345bd");
      $("img[class$='flag english']").css("background-color", "transparent");
      $(".en-lang").each(function () {
        $(this).css("display", "none");
      });
      $("span.dk-lang").each(function () {
        $(this).css("display", "inline");
      });
      $("section.dk-lang").each(function () {
        $(this).css("display", "flex");
      });
      $(".benefits-list.en-lang").slick("unslick");
      $(".benefits-list.dk-lang").css("display", "block");
      $(".benefits-list.dk-lang").slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "benefits-list-indicators",
        infinite: true,
      });
    }
  });
});
