Package.describe({
  name: 'mquandalle:jeet',
  version: '0.0.1',
  summary: 'A grid sytem for SASS or Stylus',
  git: 'git@github.com:mquandalle/meteor-jeet.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('PLUGINS-PREVIEW@1');
  api.use('stylus');
  api.addFiles('jeet.styl', 'client');
  // XXX For future proof-ness I would rather include something like
  // 'jeet-src/stylus/jeet/*' instead of naming each individual file.
  // If the new meteor package file ever support this, we need to find a way to
  // expose a file with a different name than its name in the isopackage, eg:
  // api.addFiles('jeet-src/stylus/jeet/index.styl', {as: 'jeet.styl'});
  api.addFiles('jeet-src/stylus/jeet/_settings.styl', 'client');
  api.addFiles('jeet-src/stylus/jeet/_functions.styl', 'client');
  api.addFiles('jeet-src/stylus/jeet/_grid.styl', 'client');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers']);
  api.use('stylus');
  api.use('mquandalle:jeet');
  api.addFiles(['tests/tests.js', 'tests/tests.styl'], 'client');
});
