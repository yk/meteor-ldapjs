Package.describe({
  name: 'typ:ldapjs',
  version: '0.7.1',
  summary: 'Meteor package wrapper for the ldapjs Npm module https://www.npmjs.com/package/ldapjs',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  ldapjs: "0.7.1", 
});

Package.onUse(function (api) {

  api.add_files([
    'lib/ldapjs.js',
  ], ['server']);
  
  api.export([
    'ldapjs'
  ]);
});