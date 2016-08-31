var React = require('react');
var Actions = require('../actions');
var seatStore = require('../stores/seat-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(seatStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      seat: ''
    }
  },
  componentWillMount: function() {
    Actions.getSeat(this.props.params.href);
  },
  render: function() {
    return (
        <div className="content" dangerouslySetInnerHTML={{__html: this.state.seat}}></div>
    );
  },
  onChange: function(event, seat) {
    this.setState({seat: seat});
    console.log(this.state.seat);
  }
});
