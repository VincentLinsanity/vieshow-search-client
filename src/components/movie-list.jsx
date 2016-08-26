var React = require('react');
var Actions = require('../actions');
var movieStore = require('../stores/movie-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(movieStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      movies: []
    }
  },
  componentWillMount: function() {
    Actions.getMovies(this.props.params.id);
  },
  render: function() {
    return <div className="list-group">
      {this.renderMovies()}
    </div>
  },
  renderMovies: function() {
    return this.state.movies.map(function(topic){
      return <Link to={"time/" + topic.movieHref} className="list-group-item" key={topic.movieHref}>
        <h4>{topic.movieName}</h4>
        <p>{topic.movieHref}</p>
      </Link>
    });
  },
  onChange: function(event, movies) {
    this.setState({movies: movies});
  }
});
