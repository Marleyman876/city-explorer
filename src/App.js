import React from 'react';
import axios from 'axios';

import Searching from "./Searching.js"

import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      alreadySearched: false,
      searchedLocation: '',
    };
  }
  showSearch = () => {
    this.setState({ alreadySearched: false }); //function to check for places already searched
  }

  searchHandle = async(searchedLocation)=>{
    let locationData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q={searchedLocation}&format=json`)

    console.log(locationData);
  }

  



  render() {
    return (
      <>
        <h1>Euro-Trotter</h1>
        <Searching />
      </>
    )
  };
  
  

}






export default App;
