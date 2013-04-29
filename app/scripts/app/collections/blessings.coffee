define ["jquery", "underscore", "backbone", "app/models/blessing"], ($, _, Backbone, BlessingModel) ->
  'use strict'
  
  class BlessingsCollection extends Backbone.Collection

    model: BlessingModel

    url: ->
      "http://localhost:3000/users/" + @token + "/blessings"

    initialize: (obj) ->
      @token = obj.token
    