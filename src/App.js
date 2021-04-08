import React from 'react';
import axios from 'axios';

import Searching from "./Searching.js"

import './App.css'
import City from './City.js';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      alreadySearched: false,
      searchedLocation: '',
      display_name: '',
      lat:'',
      lon:'',
    };
  }
  showSearch = () => {
    this.setState({ alreadySearched: false }); //function to check for places already searched
  }

  searchHandle = async(searchedLocation)=>{
    let locationData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${searchedLocation}&format=json`)
    this.setState({
      lat: locationData.data[0].lat,
      lon:locationData.data[0].lon,
      display_name:locationData.data[0].display_name,

    })

    console.log(locationData);
  }

  render() {
    return (
      <>
        <h1>Euro-Trotter</h1>
        <Searching submitButtonEvent={this.searchHandle} />
        <City Longitude={this.state.lon} Latitude={this.state.lat} display_name={this.state.display_name} />
      </>
    )
  };
  
  

}


export default App;
