import React, { Component } from 'react'

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

  getSongs() {
    fetch(songsURL)
    .then(res => {return res.json()})
    .then(data => this.setState({songs: data}))
  }


  render() {
    return (
      <div>
        <h1>My favorite things</h1>
      </div>
    )
  }
}

