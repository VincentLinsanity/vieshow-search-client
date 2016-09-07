var React = require('react');
var Actions = require('../actions');
var timeStore = require('../stores/time-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Collapse = require('./collapse');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(timeStore, 'onChange'),
  ],
  getInitialState: function () {
    return {
      times: [],
      select: false,
    }
  },
  componentWillMount: function () {
    Actions.getTime(this.props.params.id);
  },
  render: function () {
    return (<div>
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
    return this.state.times.map(function (topic) {
      var value = topic.date + ' ' + topic.time;
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
    this.setState({time: newTimes});
    console.log(newTimes);
    console.log(this.state.time);
    //this.setState({select: true});
  },
  renderCollapse: function () {
    if (!this.state.select) {
      return 'empty';
    }
    return this.state.times.map((topic, index) => {
      if (index == 1) {
        index = 'one';
      }
      return (<nav className="navbar navbar-default header">
        <Collapse date={topic.date} time={topic.time} key={index}
          href={topic.href} index={index}/></nav>)
    })
  },
  onChange: function (event, times) {
    this.setState({ times: times });
  },
});
