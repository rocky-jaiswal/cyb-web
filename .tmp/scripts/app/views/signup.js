(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "jquery_form", "underscore", "backbone", "handlebars", "text!../templates/signup.hbs"], function($, jquery_form, _, Backbone, Handlebars, signupTemplate) {
    'use strict';

    var SignupView;
    return SignupView = (function(_super) {

      __extends(SignupView, _super);

      function SignupView() {
        this.handleResponse = __bind(this.handleResponse, this);
        return SignupView.__super__.constructor.apply(this, arguments);
      }

      SignupView.prototype.el = ".right";

      SignupView.prototype.events = {
        "submit #register-form": "handleSubmit"
      };

      SignupView.prototype.template = Handlebars.compile(signupTemplate);

      SignupView.prototype.initialize = function() {
        return this.render();
      };

      SignupView.prototype.render = function() {
        return $(this.el).html(this.template);
      };

      SignupView.prototype.handleSubmit = function(e) {
        e.preventDefault();
        return $("#register-form").ajaxSubmit({
          success: this.handleResponse,
          error: this.handleError
        });
      };

      SignupView.prototype.handleResponse = function(response, status, xhr, form) {
        localStorage.setItem("user", JSON.stringify(response));
        return this.options.router.navigate("add", {
          trigger: true
        });
      };

      SignupView.prototype.handleError = function() {
        $(".alert").html("Error while signing up. Email already exists.");
        return $(".alert").removeClass("hidden");
      };

      return SignupView;

    })(Backbone.View);
  });

}).call(this);
