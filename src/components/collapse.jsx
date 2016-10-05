var React = require('react');
var SeatList = require('./seat-list');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      show: 'Show seat',
    }
  },
  render: function () {
    return (
      <div className="container" id={this.props.href}>
        <h2>{this.props.date}</h2>
        <p>{this.props.time}</p>
        <button type="button" className="btn btn-info" onClick={this.handleClick()}
          data-toggle="collapse" data-target={"#" + this.props.index}>
          {this.state.show}</button>
        {this.renderSeat() }
      </div>
    );
  },
  handleClick() {
    this.state
  },
  renderSeat() {
    return (
      <div id={this.props.index} className="collapse">
        <SeatList href={this.props.href} seat={this.props.seat}/>
      </div>
    );
  }
});