(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!../templates/add.hbs", "text!../templates/sidebar.hbs"], function($, _, Backbone, Handlebars, addTemplate, sidebarTemplate) {
    'use strict';

    var AddView;
    return AddView = (function(_super) {

      __extends(AddView, _super);

      function AddView() {
        this.handleError = __bind(this.handleError, this);

        this.handleResponse = __bind(this.handleResponse, this);
        return AddView.__super__.constructor.apply(this, arguments);
      }

      AddView.prototype.el = ".content";

      AddView.prototype.events = {
        "submit #add-form": "handleSubmit"
      };

      AddView.prototype.template = Handlebars.compile(addTemplate);

      AddView.prototype.initialize = function() {
        if (localStorage.getItem("user")) {
          return this.render();
        }
      };

      AddView.prototype.render = function(obj) {
        Handlebars.registerPartial("sidebar", sidebarTemplate);
        return $(this.el).html(this.template(_.extend({
          add: true
        }, obj)));
      };

      AddView.prototype.handleSubmit = function(e) {
        e.preventDefault();
        return $("#add-form").ajaxSubmit({
          data: {
            authentication_token: this.model.get("authentication_token")
          },
          success: this.handleResponse,
          error: this.handleError
        });
      };

      AddView.prototype.handleResponse = function(response, status, xhr, form) {
        if (status === "success") {
          return this.render({
            message: "Saved successfully!"
          });
        }
      };

      AddView.prototype.handleError = function(response) {
        return this.render({
          message: response.responseText
        });
      };

      return AddView;

    })(Backbone.View);
  });

}).call(this);
