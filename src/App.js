import React from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

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
      errorMessage: false,
    };
  }
  showSearch = () => {
    this.setState({ alreadySearched: false }); //function to check for places already searched
  }

  searchHandle = async (searchedLocation) => {
    try {
      let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${searchedLocation}&format=json`)
      this.setState({
        cityData: locationData.data[0]
      })
    } catch (error) {
      this.setState({ errorMessage: error.message })
    }
  };

  weatherServer = async()=>{
    let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND}/city-weather`);
    console.log(weatherData);

  }

  refreshPage=() =>{
    window.location.reload();
  }


  render() {
    if(this.state.errorMessage){
      return(
        <>
        <Alert variant="secondary">
          <Alert.Heading>Does that City Really Exist?</Alert.Heading>
          <p>
            Please renter a real City.
          </p>
        </Alert>
        <Button variant="outline-light" size="sm" type="button" onClick={this.refreshPage}>Try again!</Button>
        </>
      )
    }
    
    return (
      <>
        <h1>Euro-Trotter</h1>
          <Searching submitButtonEvent={this.searchHandle} />
          <City display={this.state.cityData} />


      </>
    )
  };



}


export default App;
