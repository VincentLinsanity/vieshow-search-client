var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var movieList = require('./components/movie-list');
var timeList = require('./components/time-list');
var seatList = require('./components/seat-list');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="movies/:id" component={movieList} />
      <Route path="time/:id/:name/:cinema" component={timeList} />
      <Route path="seat/:href" component={seatList} />
    </Route>
  </Router>
)
