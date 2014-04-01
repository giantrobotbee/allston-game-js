var Game = require('./game.js');

var startGame;

startGame = function() {
  document.removeEventListener('DOMContentLoaded', startGame);
  var game = new Game(1024, 576);

  game.run();
}

document.addEventListener('DOMContentLoaded', startGame);
