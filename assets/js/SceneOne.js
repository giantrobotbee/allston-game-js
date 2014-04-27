var Scene = require('./scene.js');
var InputEvent = require('./InputEvent.js');

var SceneOne = Scene.extend({
  events: {
    'upPressInputEvent' : 'onUp',
    'upReleaseInputEvent' : 'offUp'
  },

  initialize: function() {
  },

  onUp: function(event) {
  },

  offUp: function(event) {
  }
});

module.exports = SceneOne;
