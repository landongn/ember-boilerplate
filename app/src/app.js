var App = window.App = Ember.Application.create();

/* Order and include as you please. */
require('src/models/*');
require('src/controllers/*');
require('src/views/*');
require('src/helpers/*');
require('src/components/*');
require("src/routes/*");
require('src/router');
