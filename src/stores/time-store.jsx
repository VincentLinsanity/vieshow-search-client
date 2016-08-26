var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getTime: function(href) {
    return Api.get('vieshow/movieTime/' + href)
      .then(function(json){
        this.time = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.time);
  }
});
