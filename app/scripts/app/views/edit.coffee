define ["jquery", "underscore", "backbone", "handlebars", "text!../templates/edit.hbs", "text!../templates/sidebar.hbs"], ($, _, Backbone, Handlebars, editTemplate, sidebarTemplate) ->
  'use strict'
  
  class EditView extends Backbone.View
    
    el: ".content"

    events:
      "submit #edit-form":  "handleSubmit"

    template: Handlebars.compile(editTemplate)

    initialize: ->
      @render()

    render: (obj) ->
      @model.fetch({async: false})
      Handlebars.registerPartial("sidebar", sidebarTemplate)
      $(@el).html(@template(_.extend({add: true}, @model.toJSON(), obj)))
      
    handleSubmit: (e) ->
      e.preventDefault()
      $("#edit-form").ajaxSubmit({data: {id: @model.get("id"), authentication_token: @model.get("token")}, success: @handleResponse, error: @handleError})

    handleResponse: (response, status, xhr, form) =>
      if status is "success"
        @render({message: "Saved successfully!"})

    handleError: (response) =>
      @render({message: response.responseText})