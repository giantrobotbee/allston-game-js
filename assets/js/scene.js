var _ = require('lodash');
var Base = require('./core/baseObject.js');

var Scene = Base.extend({
  events: {},

  constructor: function(sceneId) {
    this.id = sceneId;
    this.initialize();
  },

  setWorld: function(world) {
    this.world = world
    this.bindEvents();
  },

  // This is where custom init code goes
  // for individual scenes
  initialize: function() {
  },

  bindEvents: function() {
    _.each(this.events, function(callback, type) {
      this.world.inputManager.on(type, this[callback]);
    }, this);
  },

  update: function() {
  },

  play: function() {
  },

  pause: function() {
  },

  // Conceptual destructor
  stop: function() {
  }
});

module.exports = Scene;
