define ["jquery", "jquery_form", "underscore", "backbone", "handlebars", "text!../templates/signup.hbs"], ($, jquery_form, _, Backbone, Handlebars, signupTemplate) ->
  'use strict'
  
  class SignupView extends Backbone.View
    
    el: ".right"

    events:
      "submit #register-form":  "handleSubmit"

    template: Handlebars.compile(signupTemplate)

    initialize: ->
      @render()

    render: ->
      $(@el).html(@template)

    handleSubmit: (e) ->
      e.preventDefault()
      $("#register-form").ajaxSubmit({success: @handleResponse, error: @handleError})

    handleResponse: (response, status, xhr, form) =>
      localStorage.setItem("user", JSON.stringify response)
      @options.router.navigate("add", {trigger: true})

    handleError: ->
      $(".alert").html("Error while signing up. Email already exists.")
      $(".alert").removeClass("hidden")