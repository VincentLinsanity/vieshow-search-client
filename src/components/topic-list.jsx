var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic){
      return <Link to={"movies/" + topic.cinemaID} className="list-group-item" key={topic.cinemaID}>
        <h4>{topic.cinemaName}</h4>
        <p>{topic.cinemaID}</p>
      </Link>
    });
  },
  onChange: function(event, topics) {
    this.setState({topics: topics});
  }
});
