var React = require('react');
var SeatList = require('./seat-list');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="container" id={this.props.href}>
        <h2>{this.props.date}</h2>
        <p>{this.props.time}</p>
        <button type="button" className="btn btn-info"
          data-toggle="collapse" data-target={"#" + this.props.index}>Simple collapsible</button>
        {this.renderSeat() }
      </div>
    );
  },
  renderSeat() {
    return (
      <div id={this.props.index} className="collapse">
        <SeatList href={this.props.href} seat={this.props.seat}/>
      </div>
    );
  }
});