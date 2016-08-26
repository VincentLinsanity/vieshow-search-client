var React = require('react');
var Actions = require('../actions');
var timeStore = require('../stores/time-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(timeStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      time: []
    }
  },
  componentWillMount: function() {
    Actions.getTime(this.props.params.id);
  },
  render: function() {
    return <div className="list-group">
      {this.renderTime()}
    </div>
  },
  renderTime: function() {
    return this.state.time.map(function(topic){
      return <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.date}</h4>
        <p>{topic.time}</p>
        <p>{topic.href}</p>
      </Link>
    });
  },
  onChange: function(event, time) {
    this.setState({time: time});
  }
});
