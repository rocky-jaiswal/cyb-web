define ["jquery", "backbone", "app/views/login", "app/views/signup", "app/views/add", "app/views/viewown", "app/views/edit", "app/views/viewshared", "app/models/user", "app/models/blessing", "app/collections/blessings"], ($, Backbone, LoginView, SignupView, AddView, ViewOwnView, EditView, ViewSharedView, UserModel, BlessingModel, BlessingsCollection) ->
 
  class AppRouter extends Backbone.Router
    
    routes:
      ""                    : "login"
      "signup"              : "signup"
      "add"                 : "add"
      "view"                : "viewOwn"
      "edit/:id"            : "edit"
      "shared"              : "viewShared"
      "logout"              : "logout"

    login: ->
      new LoginView({router: @})

    signup: ->
      new SignupView({router: @})

    add: ->
      user = @checkUser()
      userModel = new UserModel(user)
      new AddView({model: userModel})

    viewOwn: ->
      user = @checkUser()
      myBlessings = new BlessingsCollection({token: user.authentication_token})
      new ViewOwnView({collection: myBlessings})

    edit: (id) ->
      user = @checkUser()
      blessingModel = new BlessingModel({id: id, token: user.authentication_token})
      new EditView({model: blessingModel})

    viewShared: ->
      user = @checkUser()
      userModel = new UserModel(user)
      new ViewSharedView({model: userModel})

    logout: ->
      localStorage.clear()
      @navigate("", {trigger: true})

    checkUser: ->
      user = JSON.parse(localStorage.getItem("user"))
      if user and user.authentication_token
        return user
      else
        @logout()
