$(document).ready(function(){
  $("#get_color").on("click", function(){
    var request = $.ajax({
      url: "/color",
      type: "POST"
    })
    request.done(function(response) {
      $("#color_me li:nth-child(" +response.cell+")").css("background-color", response.color)
    })
  });

});
