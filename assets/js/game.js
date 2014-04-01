var PIXI = require('pixi');
var Player = require('./player.js');
var Level = require('./level.js');
var InputManager = require('./core/inputManager.js');
var GamepadDevice = require('./core/gamepadDevice.js');
var KeyboardDevice = require('./core/keyboardDevice.js');

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function Game(width, height) {
  this.width = width;
  this.height = height;

  this.createStage();
  this.fetchRenderer();
  this.setupInputManager();
}

Game.prototype.animate = function() {
  this.inputManager.update();

  this.renderer.render(this.stage);

  requestAnimationFrame(this.animate.bind(this))
};

Game.prototype.createStage = function() {
  this.stage = new PIXI.Stage(0x66FF99);
};

Game.prototype.fetchRenderer = function() {
  this.renderer = PIXI.autoDetectRenderer(this.width, this.height);
};

Game.prototype.run = function() {
  var gameContainer = document.querySelector('#gameContainer');
  gameContainer.appendChild(this.renderer.view);

  this.animate();
};

Game.prototype.setupInputManager = function() {
  this.inputManager = new InputManager();
  this.inputManager.addInputDevice(new GamepadDevice());
  this.inputManager.addInputDevice(new KeyboardDevice());

  this.inputManager.on('up', function() {
    console.log('up was pressed');
  });
};

module.exports = Game;
