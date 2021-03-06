(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!../templates/edit.hbs", "text!../templates/sidebar.hbs"], function($, _, Backbone, Handlebars, editTemplate, sidebarTemplate) {
    'use strict';

    var EditView;
    return EditView = (function(_super) {

      __extends(EditView, _super);

      function EditView() {
        this.handleError = __bind(this.handleError, this);

        this.handleSuccessfulDelete = __bind(this.handleSuccessfulDelete, this);

        this.handleResponse = __bind(this.handleResponse, this);
        return EditView.__super__.constructor.apply(this, arguments);
      }

      EditView.prototype.el = ".content";

      EditView.prototype.events = {
        "submit #edit-form": "handleSubmit",
        "submit #delete-form": "handleDelete"
      };

      EditView.prototype.template = Handlebars.compile(editTemplate);

      EditView.prototype.initialize = function() {
        return this.render();
      };

      EditView.prototype.render = function(obj) {
        this.model.fetch({
          async: false
        });
        Handlebars.registerPartial("sidebar", sidebarTemplate);
        return $(this.el).html(this.template(_.extend({
          add: true
        }, this.model.toJSON(), obj)));
      };

      EditView.prototype.handleSubmit = function(e) {
        e.preventDefault();
        return $(e.currentTarget).ajaxSubmit({
          data: {
            id: this.model.get("id"),
            authentication_token: this.model.get("token")
          },
          success: this.handleResponse,
          error: this.handleError
        });
      };

      EditView.prototype.handleDelete = function(e) {
        e.preventDefault();
        return $(e.currentTarget).ajaxSubmit({
          data: {
            id: this.model.get("id"),
            authentication_token: this.model.get("token")
          },
          success: this.handleSuccessfulDelete,
          error: this.handleError
        });
      };

      EditView.prototype.handleResponse = function(response, status, xhr, form) {
        if (status === "success") {
          return this.render({
            message: "Saved successfully!"
          });
        }
      };

      EditView.prototype.handleSuccessfulDelete = function(response, status, xhr, form) {
        if (status === "success") {
          alert("Record deleted successfully!");
          return this.options.router.navigate("view", {
            trigger: true
          });
        }
      };

      EditView.prototype.handleError = function(response) {
        return this.render({
          message: response.responseText
        });
      };

      return EditView;

    })(Backbone.View);
  });

}).call(this);
