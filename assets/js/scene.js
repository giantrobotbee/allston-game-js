var _ = require('lodash');
var Base = require('./core/baseObject.js');

var Scene = Base.extend({
  events: {},

  constructor: function(sceneId) {
    this.id = sceneId;
  },

  setWorld: function(world) {
    this.world = world
    this.initialize();
    this.bindEvents();
  },

  // This is where custom init code goes
  // for individual scenes
  initialize: function() {
  },

  bindEvents: function() {
    this.unbindEvents();
    _.each(this.events, function(callback, type) {
      this.world.inputManager.on(type, this[callback].bind(this));
    }, this);
  },

  unbindEvents: function() {
    this.world.inputManager.removeAllListeners();
  },

  update: function() {
  },

  play: function() {
    this.bindEvents();
  },

  pause: function() {
    this.unbindEvents();
  },

  // Conceptual destructor
  stop: function() {
    this.unbindEvents();
  }
});

module.exports = Scene;
