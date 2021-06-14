import React, { Component } from 'react'
import Movieform from './components/Movieform'


const songsURL = 'http://localhost:3003/songs'
const moviesURL = 'http://localhost:3003/movies'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      songs: [],
      movies: []
    }
  }

  //////////////
  /// Movies
  //////////////
  getMovie() {
    fetch(songsURL)
      .then(data => { return data.json()}, err => console.log(err))
      .then(parsedData => this.setState({movie: parsedData}), err => console.log(err))
  }

  handleAddMovie(movie) {
    const copyMovie = [...this.state.movie]
    copyMovie.unshift(movie)
    this.setState({
      movie: copyMovie,
      title: '',
      year: 0,
      director: '',
      category: '' 
    })
  }


  getSongs() {
    fetch(songsURL)
    .then(res => {return res.json()})
    .then(data => this.setState({songs: data}))
  }


  render() {
    return (
      <div>
        <h1>My favorite things</h1>
        <Movieform handleAddMovie={this.handleAddMovie}/>
        <h3>Favorite Songs</h3>
        <h3>Favorite Movies</h3>
      </div>
    )
  }
}

