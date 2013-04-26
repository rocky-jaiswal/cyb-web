define ["jquery", "underscore", "backbone"], ($, _, Backbone) ->
  'use strict'
  
  class UserModel extends Backbone.Model

    urlRoot: ->
      "http://localhost:3000/user/" + @get("token")
