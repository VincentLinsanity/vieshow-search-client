var React = require('react');
var Actions = require('../actions');
var seatStore = require('../stores/seat-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  componentWillMount: function () {
    Actions.getSeat(this.props.href);
  },
  render: function () {
    return (
      <div className="content" id={this.props.href}
        dangerouslySetInnerHTML={{ __html: this.props.seat }}>
      </div>
    );
  },
});
