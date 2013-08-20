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

    render: (obj) ->
      Handlebars.registerPartial("sidebar", sidebarTemplate)
      $(@el).html(@template(_.extend({add: true}, obj)))
      
    handleSubmit: (e) ->
      e.preventDefault()
      $("#add-form").ajaxSubmit({data: {authentication_token: @model.get("authentication_token")}, success: @handleResponse, error: @handleError})

    handleResponse: (response, status, xhr, form) =>
      if status is "success"
        @render({message: "Saved successfully!"})

    handleError: (response) =>
      @render({message: response.responseText})