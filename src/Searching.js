import React from 'react';


class Searching extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  submitButtonEvent = (event) => {
    event.preventDefault();
    this.props.submitButtonEvent(this.state.value)
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.submitButtonEvent}>
        <label>
          Search this Location
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Explore!" />
      </form>
    )
  }
}

export default Searching;