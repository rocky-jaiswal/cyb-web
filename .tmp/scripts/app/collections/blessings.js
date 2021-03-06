(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "app/models/blessing"], function($, _, Backbone, BlessingModel) {
    'use strict';

    var BlessingsCollection;
    return BlessingsCollection = (function(_super) {

      __extends(BlessingsCollection, _super);

      function BlessingsCollection() {
        return BlessingsCollection.__super__.constructor.apply(this, arguments);
      }

      BlessingsCollection.prototype.model = BlessingModel;

      BlessingsCollection.prototype.url = function() {
        return "http://localhost:3000/users/" + this.token + "/blessings";
      };

      BlessingsCollection.prototype.initialize = function(obj) {
        return this.token = obj.token;
      };

      return BlessingsCollection;

    })(Backbone.Collection);
  });

}).call(this);
