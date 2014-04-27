var _ = require('lodash');
var InputDevice = require('./InputDevice.js');
var InputEvent = require('../InputEvent.js');

var KeyboardDevice = InputDevice.extend({
  constructor: function() {
    document.addEventListener('keydown', this.keyPressed.bind(this));
    document.addEventListener('keyup', this.keyReleased.bind(this));

    this.events = [];
  },

  pollInput: function() {
    var events = this.events;
    this.events = [];

    return events;
  },

  keyPressed: function(keyEvent) {
   _.each(KeyboardDevice.INPUT_MAP, function(keyData, keyName) {
      var keyCode = keyData.keyCode;
      var ev, foo;

      if (keyEvent.keyCode == keyCode) {
        ev = new InputEvent(keyData.pressedEvent);
        this.events.push(ev);
      }
    }, this);
  },

  keyReleased: function(keyEvent) {
   _.each(KeyboardDevice.INPUT_MAP, function(keyData, keyName) {
      var keyCode = keyData.keyCode;
      var ev, foo;

      if (keyEvent.keyCode == keyCode) {
        ev = new InputEvent(keyData.releasedEvent);
        this.events.push(ev);
      }
    }, this);
  }
});

// TODO: Use constants defined on InputEvent
// for eventType
KeyboardDevice.INPUT_MAP = {
  arrowUp: {
    keyCode: 38,
    pressedEvent: InputEvent.UP_PRESSED,
    releasedEvent: InputEvent.UP_RELEASED
  },

  arrowDown: {
    keyCode: 40,
    pressedEvent: InputEvent.DOWN_PRESSED,
    releasedEvent: InputEvent.DOWN_RELEASED
  },

  arrowLeft: {
    keyCode: 37,
    pressedEvent: InputEvent.LEFT_PRESSED,
    releasedEvent: InputEvent.LEFT_RELEASED
  },

  arrowRight: {
    keyCode: 39,
    pressedEvent: InputEvent.RIGHT_PRESSED,
    releasedEvent: InputEvent.RIGHT_RELEASED
  },

  spacebar: {
    keyCode: 32,
    pressedEvent: InputEvent.ACTION_PRESSED,
    releasedEvent: InputEvent.ACTION_RELEASED
  }
}

module.exports = KeyboardDevice;
