import React from 'react';

//render city to page 

class City extends React.Component {
  render() {
    return (
      <>
        {/* <button clickButton={this.props.showSearch }>Search Again</button>*/}
        <h2>{this.props.display_name}</h2>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.props.lon}, ${this.props.lat}&zoom=9`} alt="City Map"/>
      </>
    )
  }

}

export default City;


