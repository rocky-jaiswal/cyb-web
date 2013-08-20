(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
    'use strict';

    var BlessingModel;
    return BlessingModel = (function(_super) {

      __extends(BlessingModel, _super);

      function BlessingModel() {
        return BlessingModel.__super__.constructor.apply(this, arguments);
      }

      BlessingModel.prototype.url = function() {
        return "http://localhost:3000/users/" + this.get("token") + "/blessings/" + this.get("id");
      };

      return BlessingModel;

    })(Backbone.Model);
  });

}).call(this);
