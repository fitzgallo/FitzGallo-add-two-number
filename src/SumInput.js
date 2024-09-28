import React, { Component } from 'react';

class SumInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      secondNumber: '',
      sum: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstNumber, secondNumber } = this.state;
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    this.setState({ sum: isNaN(sum) ? 'Invalid input' : sum });
  };

  render() {
    return (
      <div>
        <h2>Calculate Sum of Two Numbers</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="firstNumber"
            placeholder="Enter first number"
            value={this.state.firstNumber}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="secondNumber"
            placeholder="Enter second number"
            value={this.state.secondNumber}
            onChange={this.handleInputChange}
          />
          <button type="submit">Calculate Sum</button>
        </form>
        {this.state.sum !== null && <h2>Sum: {this.state.sum}</h2>}
      </div>
    );
  }
}

export default SumInput;