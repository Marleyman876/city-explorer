import React from 'react'
import Card from 'react-bootstrap/Card'

export default class Movies extends React.Component {
  render() {
    let movieListing = this.props.movie.map((movie, index) => (
      <Card key={index}>
        <>
          <h2>{`${movie.title}`}</h2>
          <p>{`${movie.release_date}`}</p>
        </>
      </Card>
    )
    )
    return (
      <Card>
        <h2>Movies</h2>
        {movieListing}
      </Card>
    )
  }
}