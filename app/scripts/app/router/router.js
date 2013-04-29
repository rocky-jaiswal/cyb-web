// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone", "app/views/login", "app/views/signup", "app/views/add", "app/views/viewown", "app/views/viewshared", "app/models/user", "app/collections/blessings"], function($, Backbone, LoginView, SignupView, AddView, ViewOwnView, ViewSharedView, UserModel, BlessingsCollection) {
    var AppRouter, _ref;

    return AppRouter = (function(_super) {
      __extends(AppRouter, _super);

      function AppRouter() {
        _ref = AppRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppRouter.prototype.routes = {
        "": "login",
        "signup": "signup",
        "add": "add",
        "viewOwn": "viewOwn",
        "shared": "viewShared",
        "logout": "logout"
      };

      AppRouter.prototype.login = function() {
        return new LoginView({
          router: this
        });
      };

      AppRouter.prototype.signup = function() {
        return new SignupView({
          router: this
        });
      };

      AppRouter.prototype.add = function() {
        return this.checkAndNavigate("add");
      };

      AppRouter.prototype.viewOwn = function() {
        return this.checkAndNavigate("own");
      };

      AppRouter.prototype.viewShared = function() {
        return this.checkAndNavigate("shared");
      };

      AppRouter.prototype.logout = function() {
        localStorage.clear();
        return this.navigate("", {
          trigger: true
        });
      };

      AppRouter.prototype.checkAndNavigate = function(view) {
        var myBlessings, user, userModel;

        user = JSON.parse(localStorage.getItem("user"));
        if (user && user.authentication_token) {
          userModel = new UserModel(user);
          myBlessings = new BlessingsCollection({
            token: user.authentication_token
          });
          if (view === "add") {
            new AddView({
              model: userModel
            });
          }
          if (view === "own") {
            new ViewOwnView({
              collection: myBlessings
            });
          }
          if (view === "shared") {
            return new ViewSharedView({
              model: userModel
            });
          }
        } else {
          return this.login();
        }
      };

      return AppRouter;

    })(Backbone.Router);
  });

}).call(this);
