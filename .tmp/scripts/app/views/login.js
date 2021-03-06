(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!../templates/login.hbs"], function($, _, Backbone, Handlebars, loginTemplate) {
    'use strict';

    var LoginView;
    return LoginView = (function(_super) {

      __extends(LoginView, _super);

      function LoginView() {
        this.handleResponse = __bind(this.handleResponse, this);
        return LoginView.__super__.constructor.apply(this, arguments);
      }

      LoginView.prototype.el = ".content";

      LoginView.prototype.events = {
        "submit #login-form": "handleSubmit"
      };

      LoginView.prototype.template = Handlebars.compile(loginTemplate);

      LoginView.prototype.initialize = function() {
        return this.render();
      };

      LoginView.prototype.render = function() {
        return $(this.el).html(this.template);
      };

      LoginView.prototype.handleSubmit = function(e) {
        e.preventDefault();
        return $("#login-form").ajaxSubmit({
          success: this.handleResponse,
          error: this.handleError
        });
      };

      LoginView.prototype.handleResponse = function(response, status, xhr, form) {
        localStorage.setItem("user", JSON.stringify(response));
        return this.options.router.navigate("add", {
          trigger: true
        });
      };

      LoginView.prototype.handleError = function() {
        $(".alert").html("Error while logging in. Invalid credentials.");
        return $(".alert").removeClass("hidden");
      };

      return LoginView;

    })(Backbone.View);
  });

}).call(this);
