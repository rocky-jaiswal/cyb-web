// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
    'use strict';
    var UserModel, _ref;

    return UserModel = (function(_super) {
      __extends(UserModel, _super);

      function UserModel() {
        _ref = UserModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UserModel.prototype.urlRoot = function() {
        return "http://localhost:3000/user/" + this.get("token");
      };

      return UserModel;

    })(Backbone.Model);
  });

}).call(this);
