var PIXI = require('pixi');
var Player = require('./player.js');
var Level = require('./level.js');
var Scene = require('./scene.js');
var SceneOne = require('./SceneOne.js');
var InputEvent = require('./InputEvent.js');
var SceneManager = require('./sceneManager.js');
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
  this.inputManager = this.setupInputManager();
  this.sceneManager = this.setupSceneManager();

  this.sceneManager.addScene('one', new SceneOne());
}

Game.prototype.update = function() {
  this.inputManager.update();
  this.sceneManager.update();

  this.renderer.render(this.stage);

  requestAnimationFrame(this.update.bind(this))
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

  this.sceneManager.changeScene('one');

  this.update();
};

Game.prototype.setupInputManager = function() {
  var im = new InputManager();
  //im.addInputDevice(new GamepadDevice());
  im.addInputDevice(new KeyboardDevice());

  return im;
};

Game.prototype.setupSceneManager = function() {
  var sm = new SceneManager(this);

  return sm;
}

module.exports = Game;
