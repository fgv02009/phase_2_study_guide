$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
  $("#die-form").on("submit", function(e) {
    e.preventDefault();
    console.log("form params: " + $(this).serialize());
    var request = $.ajax({url: "/rolls",
                          type: "POST",
                          data: $(this).serialize()});

    request.done(function(response) {
      $(".die").html(response);
      console.log(response);
    });
  });

});
