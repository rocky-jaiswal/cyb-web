define ["jquery", "underscore", "backbone"], ($, _, Backbone) ->
  'use strict'
  
  class BlessingModel extends Backbone.Model
    
    url: ->
      "http://localhost:3000/users/" + @get("token") + "/blessings/" + @get("id")