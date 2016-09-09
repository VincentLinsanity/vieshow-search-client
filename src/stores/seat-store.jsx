var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getSeat: function(href) {
    return Api.get('vieshow/seat/' + href)
      .then(function(json){
        this.data = json.data;
        this.href = json.href
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.data, this.href);
  }
});
