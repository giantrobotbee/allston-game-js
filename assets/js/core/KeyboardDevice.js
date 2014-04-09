var InputDevice = require('./InputDevice');

var KeyboardDevice = InputDevice.extend({
  constructor: function() {
    document.addEventListener('keydown', this.keyPressed.bind(this));
    document.addEventListener('keyup', this.keyReleased.bind(this));
  },

  pollInput: function() {
  },

  emitEvents: function(emitter) {
    emitter.emit(event.type, event);
  },

  keyPressed: function(event) {
    // If this is a key that we care about
    // Create a new event and append it to the list
  },

  keyReleased: function(event) {
  }
});

KeyboardDevice.INPUT_MAP = {
  {
    keyCode: 38,
    eventType: 'up'
  },

  {
    keyCode: 40,
    eventType: 'down'
  },

  {
    keyCode: 37,
    eventType: 'left'
  },

  {
    keyCode: 39,
    eventType: 'right'
  },

  {
    keyCode: 32,
    eventType: 'action'
  },
}

module.exports = KeyboardDevice;
