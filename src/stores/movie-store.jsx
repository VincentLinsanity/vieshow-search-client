var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getMovies: function(cinemaId) {
    return Api.get('vieshow/movieList/' + cinemaId)
      .then(function(json){
        this.movies = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.movies);
  }
});
