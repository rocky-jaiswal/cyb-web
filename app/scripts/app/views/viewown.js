// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!../templates/viewown.hbs", "text!../templates/sidebar.hbs"], function($, _, Backbone, Handlebars, viewownTemplate, sidebarTemplate) {
    'use strict';
    var ViewOwnView, _ref;

    return ViewOwnView = (function(_super) {
      __extends(ViewOwnView, _super);

      function ViewOwnView() {
        _ref = ViewOwnView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ViewOwnView.prototype.el = ".content";

      ViewOwnView.prototype.template = Handlebars.compile(viewownTemplate);

      ViewOwnView.prototype.initialize = function() {
        if (localStorage.getItem("user")) {
          return this.render();
        }
      };

      ViewOwnView.prototype.render = function() {
        Handlebars.registerPartial("sidebar", sidebarTemplate);
        return $(this.el).html(this.template({
          viewown: true
        }));
      };

      return ViewOwnView;

    })(Backbone.View);
  });

}).call(this);
