player1 = new Player({name: "Kara"})
player2 = new Player({name: "Flori"})
player3 = new Player({name: "JD"})
player4 = new Player({name: "Daniel"})
player5 = new Player({name: "Sarah"})
player6 = new Player({name: "Ian"})



var racergame1 = new JsRacer( {players: [player1, player2, player3, player4, player5, player6]})

var gameView = new GameView({model: racergame1});

$(document).ready(function() {
  gameView.render();

  //keydown, change styling for active
  //83=s, 71 = g
  $(document).on('keydown', function(event) {
    if (event.keyCode == 83) {
      console.log(event.keyCode);
      player1.advance();
       $("#player1_strip td:nth-child(" + (player1.position -1) + ")").removeClass("active");
      $("#player1_strip td:nth-child(" + player1.position + ")").addClass("active");
    }
    else if (event.keyCode == 71) {
      console.log(event.keyCode);
      player2.advance();
      $()
      $("#player2_strip td:nth-child(" + (player2.position -1) + ")").removeClass("active");
      $("#player2_strip td:nth-child(" + player2.position + ")").addClass("active");
    }
})

$("#game").append("HI!")
