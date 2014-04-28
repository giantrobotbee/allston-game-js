var PIXI = require('pixi');
var Scene = require('./scene.js');
var InputEvent = require('./InputEvent.js');

var SceneOne = Scene.extend({
  events: {
    'upPressInputEvent' : 'onUp',
    'upReleaseInputEvent' : 'offUp',
    'rightPressInputEvent' : 'onRight',
    'rightReleaseInputEvent' : 'offRight',
    'downPressInputEvent' : 'onDown',
    'downReleaseInputEvent' : 'offDown',
    'leftPressInputEvent' : 'onLeft',
    'leftReleaseInputEvent' : 'offLeft'
  },

  initialize: function() {
    var texture = PIXI.Texture.fromImage('/assets/img/player.png');
    var player = new PIXI.Sprite(texture);
    this.movingUp = false;
    this.movingRight = false;
    this.movingLeft = false;
    this.movingDown = false;

    this.player = player;
    this.world.stage.addChild(this.player);
  },

  onUp: function(event) {
    this.movingUp = true;
  },

  offUp: function(event) {
    this.movingUp = false;
  },

  onRight: function (event) {
    this.movingRight = true;
  },

  offRight: function (event) {
    this.movingRight = false;
  },

  onLeft: function (event) {
    this.movingLeft = true;
  },

  offLeft: function (event) {
    this.movingLeft = false;
  },

  onDown: function (event) {
    this.movingDown = true;
  },

  offDown: function (event) {
    this.movingDown = false;
  },

  update: function() {
    if (this.movingRight) {
      this.player.position.x = this.player.position.x + 6;
    } else if (this.movingLeft) {
      this.player.position.x = this.player.position.x - 6;
    }

    if (this.movingUp) {
      this.player.position.y = this.player.position.y - 6;
    } else if (this.movingDown) {
      this.player.position.y = this.player.position.y + 6;
    }

    if (this.player.position.x < 0) {
      this.player.position.x = 0;
    }

    if ( (this.player.position.x + this.player.width) > this.world.renderer.width) {
      this.player.position.x = this.world.renderer.width - this.player.width;
    }

    if (this.player.position.y < 0) {
      this.player.position.y = 0;
    }

    if ( (this.player.position.y + this.player.height) > this.world.renderer.height) {
      this.player.position.y = this.world.renderer.height - this.player.height;
    }
  }
});

module.exports = SceneOne;
