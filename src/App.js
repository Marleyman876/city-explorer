import React from 'react';
import axios from 'axios';

import Searching from "./Searching.js"
import City from './City.js';

import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      alreadySearched: false,
      searchedLocation: '',
      cityData: {},
    };
  }
  showSearch = () => {
    this.setState({ alreadySearched: false }); //function to check for places already searched
  }

  searchHandle = async(searchedLocation)=>{
    let locationData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${searchedLocation}&format=json`)
    this.setState({
      cityData: locationData.data[0]
      

    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <h1>Euro-Trotter</h1>
        <Searching submitButtonEvent={this.searchHandle} />
        <City display={this.state.cityData} map={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`}/>
      </>
    )
  };
  
  

}


export default App;
