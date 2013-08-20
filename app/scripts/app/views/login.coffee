define ["jquery", "underscore", "backbone", "handlebars", "text!../templates/login.hbs"], ($, _, Backbone, Handlebars, loginTemplate) ->
  'use strict'
  
  class LoginView extends Backbone.View
    
    el: ".content"

    events:
      "submit #login-form":  "handleSubmit"

    template: Handlebars.compile(loginTemplate)

    initialize: ->
      @render()

    render: ->
      $(@el).html(@template)

    handleSubmit: (e) ->
      e.preventDefault()
      $("#login-form").ajaxSubmit({success: @handleResponse, error: @handleError})

    handleResponse: (response, status, xhr, form) =>
      localStorage.setItem("user", JSON.stringify response)
      @options.router.navigate("add", {trigger: true})

    handleError: ->
      $(".alert").html("Error while logging in. Invalid credentials.")
      $(".alert").removeClass("hidden")