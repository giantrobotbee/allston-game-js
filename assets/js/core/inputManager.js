var Evented = require('./evented.js');
var _ = require('lodash');

module.exports = Evented.extend({
  constructor: function() {
    this.devices = [];
    this.inputStates = [];
  },

  addInputDevice: function(device) {
    this.devices.push(device);
  },

  update: function() {
    _.each(this.devices, this.updateDevice, this);
    this.emitEvents();
  },

  updateDevice: function(device) {
    var state;

    state = device.pollInput();
    this.inputStates.push(state);
  },

  emitEvents: function() {
    var events = _.uniq(_.flatten(this.inputStates));

    _.each(events, function(evt) {
      this.emit(evt.type, evt);
    }, this);

    this.inputStates = [];
  }
});
