$(document).ready(function () {
  // Put your JavaScript behavior here
  $($(".tabs li.active").find("a").attr("href")).removeClass("tab");

  $(".tabs li").on("click", function() {
    $($(".tabs li.active").find("a").attr("href")).addClass("tab");
    $("li.active").removeClass("active");
    $(this).addClass("active");
    $($(this).find("a").attr("href")).removeClass("tab");
  });
});
