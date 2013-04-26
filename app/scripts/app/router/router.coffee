define ["jquery", "backbone", "app/views/login", "app/views/signup", "app/views/add", "app/views/viewown", "app/views/viewshared", "app/models/user"], ($, Backbone, LoginView, SignupView, AddView, ViewOwnView, ViewSharedView, UserModel) ->
 
  class AppRouter extends Backbone.Router
    
    routes:
      ""                    : "login"
      "signup"              : "signup"
      "add"                 : "add"
      "viewOwn"             : "viewOwn"
      "shared"              : "viewShared"
      "logout"              : "logout"

    login: ->
      new LoginView({router: @})

    signup: ->
      new SignupView({router: @})

    add: ->
      @checkAndNavigate("add")

    viewOwn: ->
      @checkAndNavigate("own")

    viewShared: ->
      @checkAndNavigate("shared")

    logout: ->
      localStorage.clear()
      @navigate("", {trigger: true})

    checkAndNavigate: (view) ->
      user = JSON.parse(localStorage.getItem("user"))
      if user and user.authentication_token
        userModel = new UserModel(user)
        new AddView({model: userModel}) if view is "add"
        new ViewOwnView({model: userModel}) if view is "own"
        new ViewSharedView({model: userModel}) if view is "shared"
      else
        @login()
