"use strict"
require.config
  shim:
    underscore:
      exports: "_"

    backbone:
      deps: ["underscore", "jquery"]
      exports: "Backbone"

    bootstrap:
      deps: ["jquery"]
      exports: "jquery"

    handlebars:
      exports: "Handlebars"

  paths:
    jquery: "../components/jquery/jquery"
    jquery_form: "../components/jquery-form/jquery.form"
    backbone: "../components/backbone-amd/backbone"
    underscore: "../components/underscore-amd/underscore"
    bootstrap: "vendor/bootstrap"
    handlebars: "../components/handlebars/handlebars"
    text: "../components/requirejs-text/text"

require ["backbone", "app/router/router"], (Backbone, AppRouter) ->
  router = new AppRouter()
  Backbone.history.start()