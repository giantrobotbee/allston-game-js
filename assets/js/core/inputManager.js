var Evented = require('./evented.js');
var _ = require('lodash');

// TODO: Extend EventEmitter
module.exports = Evented.extend({
  constructor: function() {
    this.devices = [];
    this.lastActives = [];
    this.actives = [];
  },

  addInputDevice: function(device) {
    this.devices.push(device);
  },

  update: function() {
    _.each(this.devices, this.updateDevice, this);
    this.emitEvents();
  },

  updateDevice: function(device) {
    var active;

    active = device.pollInput();
  },

  emitEvents: function() {
    var justReleased;
    var currentlyPressed;

    //justReleased = this.getRecentlyReleased();
    //currentlyPressed = this.getCurrentlyPressed();

    //// Trigger all the appropriate events
    //this.triggerPressed(currentlyPressed);
    //this.triggerReleased(justReleased);
  }
});
