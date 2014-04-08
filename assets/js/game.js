var PIXI = require('pixi');
var Player = require('./player.js');
var Level = require('./level.js');
var Scene = require('./scene.js');
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
  this.setupInputManager();
  this.setupSceneManager();
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

  document.addEventListener('keydown', (function(event) {
    if (event.keyCode === 49) {
      this.sceneManager.changeScene(SceneManager.SCENE_ONE);
    } else if (event.keyCode === 50) {
      this.sceneManager.changeScene(SceneManager.SCENE_TWO);
    }
  }).bind(this));

  this.sceneManager.changeScene(SceneManager.SCENE_ONE);

  this.update();
};

Game.prototype.setupInputManager = function() {
  this.inputManager = new InputManager();
  this.inputManager.addInputDevice(new GamepadDevice());
  //this.inputManager.addInputDevice(new KeyboardDevice());

  this.inputManager.on('up', function() {
    console.log('up was pressed');
  });
};

Game.prototype.setupSceneManager = function() {
  this.sceneManager = new SceneManager();

  this.sceneManager.addScene(new Scene(SceneManager.SCENE_ONE));
  this.sceneManager.addScene(new Scene(SceneManager.SCENE_TWO));
}

module.exports = Game;
