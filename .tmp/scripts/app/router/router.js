(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone", "app/views/login", "app/views/signup", "app/views/add", "app/views/viewown", "app/views/edit", "app/views/viewshared", "app/models/user", "app/models/blessing", "app/collections/blessings", "app/collections/shared_blessings"], function($, Backbone, LoginView, SignupView, AddView, ViewOwnView, EditView, ViewSharedView, UserModel, BlessingModel, BlessingsCollection, SharedBlessingsCollection) {
    var AppRouter;
    return AppRouter = (function(_super) {

      __extends(AppRouter, _super);

      function AppRouter() {
        return AppRouter.__super__.constructor.apply(this, arguments);
      }

      AppRouter.prototype.routes = {
        "": "login",
        "signup": "signup",
        "add": "add",
        "view": "viewOwn",
        "edit/:id": "edit",
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
        var user, userModel;
        user = this.checkUser();
        userModel = new UserModel(user);
        return new AddView({
          model: userModel
        });
      };

      AppRouter.prototype.viewOwn = function() {
        var myBlessings, user;
        user = this.checkUser();
        myBlessings = new BlessingsCollection({
          token: user.authentication_token
        });
        return new ViewOwnView({
          collection: myBlessings
        });
      };

      AppRouter.prototype.edit = function(id) {
        var blessingModel, user;
        user = this.checkUser();
        blessingModel = new BlessingModel({
          id: id,
          token: user.authentication_token
        });
        return new EditView({
          model: blessingModel,
          router: this
        });
      };

      AppRouter.prototype.viewShared = function() {
        var sharedBlessings;
        sharedBlessings = new SharedBlessingsCollection();
        return new ViewSharedView({
          collection: sharedBlessings
        });
      };

      AppRouter.prototype.logout = function() {
        localStorage.clear();
        return this.navigate("", {
          trigger: true
        });
      };

      AppRouter.prototype.checkUser = function() {
        var user;
        user = JSON.parse(localStorage.getItem("user"));
        if (user && user.authentication_token) {
          return user;
        } else {
          return this.logout();
        }
      };

      return AppRouter;

    })(Backbone.Router);
  });

}).call(this);
