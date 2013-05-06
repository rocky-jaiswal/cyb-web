// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "app/models/blessing"], function($, _, Backbone, BlessingModel) {
    'use strict';
    var SharedBlessingsCollection, _ref;

    return SharedBlessingsCollection = (function(_super) {
      __extends(SharedBlessingsCollection, _super);

      function SharedBlessingsCollection() {
        _ref = SharedBlessingsCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SharedBlessingsCollection.prototype.model = BlessingModel;

      SharedBlessingsCollection.prototype.url = function() {
        return "http://localhost:3000/shared";
      };

      return SharedBlessingsCollection;

    })(Backbone.Collection);
  });

}).call(this);
