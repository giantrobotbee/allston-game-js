var Event = require('./core/Event.js');

var InputEvent = Event.extend({
  constructor: function(type) {
    this.constructor.__super__.constructor(type);
  }
});

InputEvent.UP_PRESSED = 'upPressInputEvent';
InputEvent.DOWN_PRESSED = 'downPressInputEvent';
InputEvent.LEFT_PRESSED = 'leftPressInputEvent';
InputEvent.RIGHT_PRESSED = 'rightPressInputEvent';
InputEvent.ACTION_PRESSED = 'actionPressInputEvent';
InputEvent.UP_RELEASED = 'upReleaseInputEvent';
InputEvent.DOWN_RELEASED = 'downReleaseInputEvent';
InputEvent.LEFT_RELEASED = 'leftReleaseInputEvent';
InputEvent.RIGHT_RELEASED = 'rightReleaseInputEvent';
InputEvent.ACTION_RELEASED = 'actionReleaseInputEvent';

module.exports = InputEvent;
