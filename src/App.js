import React from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import Searching from "./Searching.js"
import City from './City.js';
import Weather from "./Weather.js"
import Movie from "./Movie.js"

import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      alreadySearched: false,
      searchedLocation: '',
      cityData: {},
      errorMessage: false,
      weatherData: [],
      movie: [],
      displayData: '',
      lat: '',
      lon: '',

    };
  }
  showSearch = () => {
    this.setState({ alreadySearched: false }); //function to check for places already searched
  }

  searchHandle = (searchedLocation) => {

    axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${searchedLocation}&format=json`,)
      .then(location => {
        console.log(location)
        this.setState({
          cityData: location.data[0],
          lat: location.data[0].lat,
          lon: location.data[0].lon,
        });
        this.weatherServer();
        this.movieServer(searchedLocation);
      })
      .catch(error => {
        this.setState({ errorMessage: error.message, })
        console.error(error);
      })
  };

  weatherServer = () => {
    axios.get(`${process.env.REACT_APP_BACKEND}/city_weather`,
      {
        params: { lon: this.state.lon, lat: this.state.lat }
      })
      .then(weatherData => {
        console.log(weatherData.data)
        this.setState({ displayData: this.displayWeather(weatherData.data) })

      })
  }

  movieServer = async (searchedLocation) => {
    try {
       // console.log(this.state.searchedLocation);
      const film = await axios.get(`${process.env.REACT_APP_BACKEND}/movies`,
        {
          params:
            { api_key: process.env.MOVIE_API_KEY, city:searchedLocation }
        });
      this.setState({ movie: film.data });
    } catch (error) {
      this.setState({ errorMessage: error.message })
    }
  }

  displayWeather = (weatherData) => weatherData.map((item, index) => <h1 key={index}> {`${item.date} | ${item.description}`}</h1>) //anytime map is used index/key must be used

  refreshPage = () => {
    window.location.reload();
  }



  render() {
    // console.log(this.state.displayData)
    console.log(this.state.errorMessage)
    if (this.state.errorMessage) {
      return (
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


        <Weather data={this.state.displayData} />
        <Movie movie={this.state.movie} />
      </>
    )
  };



}


export default App;
