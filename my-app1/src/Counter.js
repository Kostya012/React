import React from "react";
import Input from "./Input";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // this.increment = this.increment.bind(this);
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  };
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <p>Укажите шаг:</p>
        <Input id="inputStep"></Input>
        <p>Укажите начальное значение:</p>
        <Input id="inputFirst"></Input>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;