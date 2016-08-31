var Fetch = require('whatwg-fetch');
var rootUrl = 'http://192.168.105.178:3000/';
var apiKey = '430d6820d865788';

module.exports = {
  get: function (url) {
    return fetch(rootUrl + url)
      .then(function (response) {
        return response.json()
      })
  }
};
 