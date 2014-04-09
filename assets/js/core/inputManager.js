var Evented = require('./evented.js');
var _ = require('lodash');

// TODO: Extend EventEmitter
module.exports = Evented.extend({
  constructor: function() {
    this.devices = [];
  },

  addInputDevice: function(device) {
    this.devices.push(device);
  },

  update: function() {
    _.each(this.devices, this.updateDevice, this);
  },

  updateDevice: function(device) {
    device.pollInput();
    device.emitEvents(this);
  }
});
