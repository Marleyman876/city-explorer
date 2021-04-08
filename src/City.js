import React from 'react';

//render city to page 

class City extends React.Component {
  render() {
    return (
      <>
        {/* <button clickButton={this.props.showSearch }>Search Again</button>*/}
        <h2>{this.props.display.display_name}</h2>
        <img src={this.props.map} alt="City Map"/>
      </>
    )
  }

}

export default City;


