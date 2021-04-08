import React from 'react';

class Searching extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  submitButtonEvent = (event) =>{
    event.preventDefault();
    this.props.submitButtonEvent()
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
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