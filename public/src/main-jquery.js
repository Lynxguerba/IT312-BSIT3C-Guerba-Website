$(document).ready(function () {
  $("#btn-info").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#about-me").offset().top,
      },
      100
    );
  });
});
