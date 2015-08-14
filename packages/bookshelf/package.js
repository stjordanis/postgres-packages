Package.describe({
  name: 'simple:bookshelf',
  version: '0.0.1',
  documentation: null
});

Npm.depends({
  bookshelf: '0.8.1',
  knex: '0.8.6',
  exposify: '0.4.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('underscore');
  api.use('promise');
  api.use('cosmos:browserify@0.5.0');
  api.addFiles('bookshelf.browserify.js', 'client');
  api.addFiles('bookshelf.browserify.options.json', 'client');

  api.export(['Bookshelf', 'Knex'], 'client');
});

Package.onTest(function(api) {});