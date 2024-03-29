import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

class MyApp extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  onClickDay = (value) => {
      return alert(value);
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.onClickDay(this.state.date)}
        />
      </div>
    );
  }
}

export default MyApp;