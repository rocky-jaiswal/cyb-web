define ["jquery", "underscore", "backbone", "handlebars", "text!../templates/viewown.hbs", "text!../templates/sidebar.hbs"], ($, _, Backbone, Handlebars, viewownTemplate, sidebarTemplate) ->
  'use strict'
  
  class ViewOwnView extends Backbone.View
    
    el: ".content"

    template: Handlebars.compile(viewownTemplate)

    initialize: ->
      if localStorage.getItem("user")
        @render()

    render: ->
      Handlebars.registerPartial("sidebar", sidebarTemplate)
      $(@el).html(@template({viewown : true}))
