var React = require('react');
var Actions = require('../actions');
var timeStore = require('../stores/time-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Collapse = require('./collapse');
var seatStore = require('../stores/seat-store');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(timeStore, 'onChange'),
    Reflux.listenTo(seatStore, 'onSeatChange')
  ],
  getInitialState: function () {
    return {
      times: [],
      select: false,
      newTimes: [],
      seats: [],
    }
  },
  componentWillMount: function () {
    Actions.getTime(this.props.params.id);
  },
  render: function () {
    return (<div>
    <p>{this.props.params.name + this.props.params.cinema}</p>
      <select id="lang" onChange={this.handleSelect}>
        <option value={'select date'}>{'select date'}</option>
        {this.renderDate() }
      </select>
      <div>
        {this.renderCollapse() }
      </div>
    </div>
    )
  },
  renderDate: function () {
    var value = '';
    return this.state.times.map(function (topic) {
      if (value == topic.date) return;
      value = topic.date;
      return <option value={topic.date}>{value}</option>
    });
  },
  handleSelect: function (event) {
    var newTimes = [];
    this.state.times.map(function (topic) {
      if (event.target.value == topic.date) {
        newTimes.push(topic);
      }
    });
    this.setState({newTimes: newTimes});
    this.setState({select: true});
  },
  renderCollapse: function () {
    if (!this.state.select) {
      return 'empty';
    }
    return this.state.newTimes.map((topic, index) => {
      if (index == 1) {
        index = 'one';
      }
      var seat = '';
      var seats = this.state.seats;
      for (index in seats) {
        if (topic.href == seats[index].href) {
          seat = seats[index].seat;
        }
      }
      return (<nav className="navbar navbar-default header">
        <Collapse date={topic.date} time={topic.time} key={index} seat={seat}
          href={topic.href} index={index}/></nav>)
    })
  },
  onChange: function (event, times) {
    this.setState({ times: times });
  },
  onSeatChange: function(event, seat, href) {
    var seatObj = {
      seat: seat,
      href: href
    }
    this.state.seats.push(seatObj);
    this.setState({seats: this.state.seats});
  }
});
