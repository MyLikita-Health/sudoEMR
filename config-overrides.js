module.exports = config => {
    config.externals = [
      'nativescript-xmpp-client',
      'node-xmpp-client',
      'node-fetch',
      'form-data'
    ];
  
    return config;
  }