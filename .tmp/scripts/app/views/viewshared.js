(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!../templates/viewshared.hbs", "text!../templates/sidebar.hbs"], function($, _, Backbone, Handlebars, viewsharedTemplate, sidebarTemplate) {
    'use strict';

    var ViewSharedView;
    return ViewSharedView = (function(_super) {

      __extends(ViewSharedView, _super);

      function ViewSharedView() {
        return ViewSharedView.__super__.constructor.apply(this, arguments);
      }

      ViewSharedView.prototype.el = ".content";

      ViewSharedView.prototype.template = Handlebars.compile(viewsharedTemplate);

      ViewSharedView.prototype.initialize = function() {
        this.collection.fetch({
          async: false
        });
        return this.render();
      };

      ViewSharedView.prototype.render = function() {
        Handlebars.registerPartial("sidebar", sidebarTemplate);
        return $(this.el).html(this.template(_.extend({
          viewshared: true
        }, {
          collection: this.collection.toJSON()
        })));
      };

      return ViewSharedView;

    })(Backbone.View);
  });

}).call(this);
