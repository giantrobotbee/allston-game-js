var PIXI = require('pixi');

function Player() {
  this.texture = PIXI.Texture.fromImage('assets/img/player.png');
  this.sprite = new PIXI.Sprite(this.texture);

  this.sprite.width = 100;
  this.sprite.height = 100;
  this.sprite.position.x = 400;
  this.sprite.position.y = 200;
}

module.exports = Player
