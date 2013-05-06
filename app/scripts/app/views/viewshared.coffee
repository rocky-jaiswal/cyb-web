define ["jquery", "underscore", "backbone", "handlebars", "text!../templates/viewshared.hbs", "text!../templates/sidebar.hbs"], ($, _, Backbone, Handlebars, viewsharedTemplate, sidebarTemplate) ->
  'use strict'
  
  class ViewSharedView extends Backbone.View
    
    el: ".content"

    template: Handlebars.compile(viewsharedTemplate)

    initialize: ->
      @collection.fetch({async: false})
      @render()

    render: ->
      Handlebars.registerPartial("sidebar", sidebarTemplate)
      $(@el).html(@template(_.extend({viewown : true}, {collection: @collection.toJSON()})))
