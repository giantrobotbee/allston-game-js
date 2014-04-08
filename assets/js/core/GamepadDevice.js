var InputDevice = require('./InputDevice');
var _ = require('lodash');

/**
 * Concrete driver for gamepads that are the Xbox 360 gamepad.
 * All other gamepads are inferior and are not implemented in this class.
 * If you don't like it, you can do something about it.
 * @class GamepadDevice
 * @author Dan Barron
 */
var GamepadDevice = InputDevice.extend({
  constructor: function() {
    this.gamepads = {};
    this.buttonMap = {};
    this.axisMap = {};

    window.addEventListener("gamepadconnected", this.gamepadConnected);
    window.addEventListener("gamepaddisconnected", this.gamepadDisconnected);

    if (navigator.webkitGetGamepads) {
      setInterval(this.scanGamepads.bind(this), 500);
    }
  },

  pollInput: function() {
    var buttonState;
    var joyState;

    if (navigator.webkitGetGamepads) {
      this.scanGamepads();
    }

    _.each(this.gamepads, function(controller) {
      buttonState = this.captureButtons(controller.buttons);
      joyState = this.captureJoy(controller.axes);
    }, this);
  },

  scanGamepads: function() {
    var pads = navigator.webkitGetGamepads();

    for (var i = 0; i < pads.length; i++) {
      if (pads[i]) {
        if (!_.has(pads[i].index, this.gamepads)) {
          this.addGamepad(pads[i]);
        } else {
          this.gamepads[pads[i].index] = pads[i];
        }
      }
    }
  },

  gamepadConnected: function (event) {
    this.addGamepad(event.gamepad);
  },

  gamepadDisconnected: function(event) {
    delete this.gamepads[event.gamepad.index];
  },

  addGamepad: function(gamepad) {
    this.gamepads[gamepad.index] = gamepad;
  },

  captureButtons: function(buttons) {
    var down = [];

    _.each(buttons, function(button, idx) {
      if(button > 0) {
        down.push(GamepadDevice.BUTTONS[idx]);
      }
    });

    return down;
  },

  captureJoy: function(sticks) {
  }
});

GamepadDevice.BUTTONS = [
  'A', 'B', 'X', 'Y',
  'LB', 'RB', 'LT', 'RT',
  'BACK', 'START', 'LEFT_STICK', 'RIGHT_STICK',
  'DPAD_UP', 'DPAD_DOWN', 'DPAD_LEFT', 'DPAD_RIGHT',
  'HOME'
];

GamepadDevice.AXES = ['LEFT_STICK_X', 'LEFT_STICK_Y', 'RIGHT_STICK_X', 'RIGHT_STICK_Y'];

module.exports = GamepadDevice;
