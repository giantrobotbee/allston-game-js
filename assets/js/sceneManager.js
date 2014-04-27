var _ = require('lodash');
var Base = require('./core/baseObject.js');

var SceneManager = Base.extend({
  constructor: function(world) {
    this.world = world;
    this.scenes = {};
    this.currentScene = null;
  },

  addScene: function(id, scene) {
    if (!this.scenes[id]) {
      scene.setWorld(this.world);
      this.scenes[id] = scene;
    }
  },

  removeScene: function(scene) {
    if (this.scenes[scene.id]) {
      delete this.scenes[scene.id];
    }
  },

  changeScene: function(sceneId) {
    if (_.has(this.scenes, sceneId)) {
      if (this.currentScene) {
        var currentId = this.currentScene.id || null;

        // Pause current scene
        this.currentScene.pause();
        // Replace old version in collection
        this.scenes[currentId] = this.currentScene;
      }

      var scene = this.scenes[sceneId];

      // Assign new scene
      this.currentScene = scene;
      // Play that funky shit
      this.currentScene.play();
    }
  },

  update: function() {
    this.currentScene.update();
  }
});

module.exports = SceneManager;
