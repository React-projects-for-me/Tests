import React, { Component } from "react";

class ClassCounter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        console.log(this);
    }

     increment() {
        this.setState({count : this.state.count + 1})
    }
     decrement() {
        this.setState({count : this.state.count - 1})
        console.log(this);
    }
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.increment}>Increment by 1</button>
        <button onClick={this.decrement}>Decrement by 1</button>
      </div>
    );
  }
}

export default ClassCounter;
