var _ = require('lodash');
var Base = require('./core/baseObject.js');

var SceneManager = Base.extend({
  constructor: function() {
    this.scenes = {};
    this.currentScene = null;
  },

  addScene: function(scene) {
    if (!this.scenes[scene.id]) {
      this.scenes[scene.id] = scene;
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

SceneManager.SCENE_ONE = "sceneOne";
SceneManager.SCENE_TWO = "sceneTwo";

module.exports = SceneManager;
