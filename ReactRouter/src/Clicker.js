import React from 'react';

export class ClickApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.countPlus = this.countPlus.bind(this);
    this.countMinus = this.countMinus.bind(this);
    this.countReset = this.countReset.bind(this);
  }

  //функции кнопок
  countPlus() {
    this.setState((prevstate) => ({
      counter: prevstate.counter + 1
    }));
  }

  countMinus() {
    this.setState((prevstate) => ({
      counter: prevstate.counter - 1
    }));
  }

  countReset() {
    this.setState((prevstate) => ({
      counter: 0
    }));
  }

  render() {
    return (

      <div className="clickerContainer">
        <div className="clicker-wrapper">
          {/*<button className="button-delete">Delete</button>*/}
          <div className="counter">
            <p>{this.state.counter}</p>
          </div>
          <div className="buttons">
            <button onClick={this.countMinus}>-</button>
            <button onClick={this.countReset}>Reset</button>
            <button onClick={this.countPlus}>+</button>
          </div>

        </div>
      </div>

    );
  }

}
