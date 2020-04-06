import React from 'react';
import '../Styles/Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <span class="badge badge-pill badge-warning"><h1>Time</h1></span>
        <span class="badge badge-pill badge-info">{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default Clock;
