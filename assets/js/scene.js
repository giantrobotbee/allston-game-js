var _ = require('lodash');
var Base = require('./core/baseObject.js');

var Scene = Base.extend({
  constructor: function(sceneId) {
    this.id = sceneId;
  },

  play: function() {
  },

  update: function() {
  },

  pause: function() {
  }
});

module.exports = Scene;
