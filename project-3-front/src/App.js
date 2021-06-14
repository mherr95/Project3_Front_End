import React, { Component } from "react";
import Movieform from "./components/Movieform";
import SongForm from "./components/SongForm";

const songURL = "http://localhost:3003/songs";
const movieURL = "http://localhost:3003/movies";



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      movies: []
    }

  }

  //////////////
  /// Movies
  //////////////

  // handleAddMovie(movie) {
  //   const copyMovie = [...this.state.movies]
  //   copyMovie.unshift(movie)
  //   this.setState({
  //     movies: copyMovie,
  //   })
  // }


  getMovie() {
    fetch(movieURL)
    .then(res => {return res.json()})
    .then(data => this.setState({movies: data}))
  }

  deleteMovie(id) {
    fetch(movieURL + id, {
      method: 'DELETE'
    })
      .then( res => {
        if(res.status === 200) {
          const findIndex = this.state.movies.findIndex(movie => movie._id === id)
          const copyMovies = [...this.state.movies]
          copyMovies.splice(findIndex, 1)
          this.setState({
            movies: copyMovies
          })
        }
      })
  }

  /////////////////
  // SONGS CODE
  ////////////////

  componentDidMount(){
    this.getSongs()
    this.getMovie()
  }

  // handleAddSong (song) {
  //   const copySongs = [...this.state.songs]
  //   copySongs.unshift(song)
  //   this.setState({
  //     song: copySongs,
  //   })
  // }

  getSongs() {
    fetch(songURL)
    .then(res => {return res.json()})
    .then(data => {
      this.setState({songs: data})})
  }

  deleteSong(id) {
    fetch(songURL + id, {
      method: 'DELETE'
    })
      .then( res => {
        if(res.status === 200) {
          const findIndex = this.state.songs.findIndex(song => song._id === id)
          const copySongs = [...this.state.songs]
          copySongs.splice(findIndex, 1)
          this.setState({
            songs: copySongs
          })
        }
      })
  }


  render() {
    return (
      <div>
        <h1>My favorite things</h1>
        <h3>Favorite Songs</h3>
        <SongForm  getSongs={() => this.getSongs()}/>
        <table>
          <tbody>
            <tr>
              <th>Artist</th>
              <th>Song Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </tbody>
          <tbody>
            { this.state.songs.map(song => {
              return (
                <tr key={song._id} >
                  <td>{song.artist}</td>
                  <td>{song.song}</td>
                  <td><button>Edit</button></td>
                  <td><button onDoubleClick={() => this.deleteSong(song._id)}>&#128465;</button></td>
                </tr>

              )
            })
            }
          </tbody>
        </table>
        <h3>Favorite Movies</h3>
        
        <Movieform getMovie = { () => this.getMovie() } />
        <table>

        <tbody>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Category</th>
            </tr>
          </tbody>
          
          <tbody>
            {this.state.movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.year}</td>
                  <td>{movie.director}</td>
                  <td>{movie.category}</td>
                  <td><button onDoubleClick={() => this.deleteMovie(movie._id)}>&#128465;</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
