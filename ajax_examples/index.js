$(document).ready(function() {
  var request1 = $.ajax({
    url: "/first",
    type: "GET"
  });

  request1.done(function(response) {
    $("body").append("<p>" + response + "</p>");
  });

  var request2 = $.ajax({
    url: "/second",
    type: "GET"
  });

  request2.done(function(response) {
    $("body").append("<p>" + response + "</p>");
  });

  var firstNumber = $.ajax({
    url: "/first.json",
    type: "GET"
  });

  var secondNumber = $.ajax({
    url: "/second.json",
    type: "GET"
  });

  $.when(firstNumber, secondNumber).done(function(response1, response2) {
    var sum = response1[0].value + response2[0].value;
    $("body").append("<p>SUM: " + sum + "</p>");
  });

});
