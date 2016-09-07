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
  getInitialState: function () {
    return {
      movies: [],
      title: '',
      cinemaList: [],
    }
  },
  componentWillMount: function () {
    Actions.getMovies(this.props.params.id);
  },
  render: function () {
    return (<div className="list-group">
    <h2>{this.state.title}</h2>
      <select id="lang" onChange={this.handleSelect} value={this.state.title}>
        {this.renderCinema() }
      </select>
      <div>
      {this.renderMovies() }
      </div>
    </div>)
  },
  renderCinema: function () {
    return this.state.cinemaList.map(function (topic) {
      return <option value={topic.id}>{topic.title}</option>
    });
  },
  handleSelect: function (event) {
    Actions.getMovies(event.target.value);
  },
  renderMovies: function () {
    return this.state.movies.map(function (topic) {
      return <Link to={"time/" + topic.movieHref} className="list-group-item" key={topic.movieHref}>
        <h4>{topic.movieName}</h4>
        <p>{topic.movieHref}</p>
      </Link>
    });
  },
  onChange: function (event, movies, title, cinemaList) {
    this.setState({
      movies: movies,
      title: title,
      cinemaList: cinemaList
    });
  }
});
