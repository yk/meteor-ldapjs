Package.describe({
  name: 'yk:ldapjs',
  version: '0.7.3',
  summary: 'Meteor package wrapper for the ldapjs Npm module https://www.npmjs.com/package/ldapjs',
  git: 'https://github.com/yk/meteor-ldapjs',
  documentation: 'README.md'
});

Npm.depends({
  ldapjs: "1.0.0", 
});

Package.onUse(function (api) {

  api.add_files([
    'lib/ldapjs.js',
  ], ['server']);
  
  api.export([
    'MeteorWrapperLdapjs'
  ]);
});
