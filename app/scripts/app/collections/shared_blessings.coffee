define ["jquery", "underscore", "backbone", "app/models/blessing"], ($, _, Backbone, BlessingModel) ->
  'use strict'
  
  class SharedBlessingsCollection extends Backbone.Collection

    model: BlessingModel

    url: ->
      "http://localhost:3000/shared"
