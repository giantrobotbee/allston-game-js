var PIXI = require('pixi');

function Level(width, height) {
  var texture = PIXI.Texture.fromImage('assets/img/grass.png');
  this.tile = new PIXI.TilingSprite(texture, width, height);
}

Level.prototype.update = function() {
}

module.exports = Level;
