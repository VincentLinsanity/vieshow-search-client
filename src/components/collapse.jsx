var React = require('react');
var SeatList = require('./seat-list');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="container">
        <h2>{this.props.date}</h2>
        <p>{this.props.time}</p>
        <button type="button" className="btn btn-info"
          data-toggle="collapse" data-target={"#" + this.props.index}>Simple collapsible</button>
        <div className="container" id={this.props.index} className="collapse">
          <SeatList href={this.props.href} />
        </div>
      </div>
    );
  },
});