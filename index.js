//
//     MArvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//
var x="a2765a3f384722edd9dd9a1c1b5fde05110bf6d6";
exports.createClient = function(options) {

  if (!options) {
    throw new Error('You must provide API credentials');
  }

  if (!options.privateKey) {
    throw new Error('You must specify a private API key');
  }

  if (!options.publicKey) {
    throw new Error('You must specify a public API key');
  }

  return require('./lib')(options);
};
