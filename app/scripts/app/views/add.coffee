define ["jquery", "underscore", "backbone", "handlebars", "text!../templates/add.hbs", "text!../templates/sidebar.hbs"], ($, _, Backbone, Handlebars, addTemplate, sidebarTemplate) ->
  'use strict'
  
  class AddView extends Backbone.View
    
    el: ".content"

    events:
      "submit #add-form":  "handleSubmit"

    template: Handlebars.compile(addTemplate)

    initialize: ->
      if localStorage.getItem("user")
        @render()

    render: ->
      Handlebars.registerPartial("sidebar", sidebarTemplate)
      $(@el).html(@template({add: true}))
      
    handleSubmit: (e) ->
      e.preventDefault()
      $("#add-form").ajaxSubmit({data: {token: @model.get("token")}, success: @handleResponse, error: @handleError})

    handleResponse: (response, status, xhr, form) =>
      console.log response

    handleError: ->
      console.log "error!"