define ["jquery", "underscore", "backbone", "handlebars", "text!../templates/viewshared.hbs", "text!../templates/sidebar.hbs"], ($, _, Backbone, Handlebars, viewsharedTemplate, sidebarTemplate) ->
  'use strict'
  
  class ViewSharedView extends Backbone.View
    
    el: ".content"

    template: Handlebars.compile(viewsharedTemplate)

    initialize: ->
      if localStorage.getItem("user")
        @render()

    render: ->
      Handlebars.registerPartial("sidebar", sidebarTemplate)
      $(@el).html(@template({viewshared: true}))
