import React from 'react';
import { Container, Image} from 'react-bootstrap';

//render city to page 

class City extends React.Component {
  render() {
    return (
      <>
        
        <h2>{this.props.display.display_name}</h2>
        <Container>
          <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.props.display.lat},${this.props.display.lon}&zoom=10`} alt="City Map" fluid />
        </Container>
        {/* <img src={this.props.map} alt="City Map"/> */}
      </>
    )
  }

}

export default City;


