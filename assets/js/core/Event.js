var Base = require('./baseObject.js');

var Event = Base.extend({
  constructor: function(type) {
    this.type = type;
  }
});

module.exports = Event;
