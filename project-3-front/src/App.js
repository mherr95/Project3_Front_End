import React, { Component } from "react";
import Movieform from "./components/Movieform";
import SongForm from "./components/SongForm";

<<<<<<< HEAD
const songsURL = "http://localhost:3003/songs";
const moviesURL = "http://localhost:3003/movies";
=======

const songURL = 'http://localhost:3003/songs/'
const movieURL = 'http://localhost:3003/movies/'
>>>>>>> 5c8bbed7e5450acaac730d83e14e9be1e79bba49

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
<<<<<<< HEAD
      movies: [],
    };
=======
      movies: []
    }

>>>>>>> 5c8bbed7e5450acaac730d83e14e9be1e79bba49
  }

  //////////////
  /// Movies
  //////////////
  // getMovie() {
  //   fetch(movieURL)
  //     .then(data => { return data.json()}, err => console.log(err))
  //     .then(parsedData => this.setState({movie: parsedData}), err => console.log(err))
  // }


  getMovie() {
<<<<<<< HEAD
    fetch(moviesURL)
      .then(
        (data) => {
          return data.json();
        },
        (err) => console.log(err)
      )
      .then(
        (parsedData) => this.setState({ movie: parsedData }),
        (err) => console.log(err)
      );
  }

  handleAddMovie(movie) {
    const copyMovie = [...this.state.movie];
    copyMovie.unshift(movie);
    this.setState({
      movie: copyMovie,
      title: "",
      year: 0,
      director: "",
      category: "",
    });
    this.handleSubmit = this.handleSubmit.bind(this);
=======
    fetch(movieURL)
    .then(res => {return res.json()})
    .then(data => this.setState({movies: data}))
  }

  handleAddMovie(movie) {
    const copyMovie = [...this.state.movies]
    copyMovie.unshift(movie)
    this.setState({
      movies: copyMovie,
    })
>>>>>>> 5c8bbed7e5450acaac730d83e14e9be1e79bba49
  }

  /////////////////
  // SONGS CODE
  ////////////////

<<<<<<< HEAD
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  handleAddSong(event) {
    event.preventDefault();

    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
    };

    const updatedSongs = [...this.state.playlist, newSong];

    this.setState({
      playlist: updatedSongs,
      title: "",
      artist: "",
    });
  }

  getSongs() {
    fetch(songsURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => this.setState({ songs: data }));
  }

=======
  componentDidMount(){
    this.getSongs()
  }

  handleAddSong (song) {
    const copySongs = [...this.state.songs]
    copySongs.unshift(song)
    this.setState({
      songs: copySongs,
    })
    // window.location.reload()
  }

  getSongs() {
    fetch(songURL)
    .then(res => {return res.json()})
    .then(data => this.setState({songs: data}))
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
            song: copySongs
          })
        }
      })
    window.location.reload()
  }


>>>>>>> 5c8bbed7e5450acaac730d83e14e9be1e79bba49
  render() {
    return (
      <div>
        <h1>My favorite things</h1>
        <h3>Favorite Songs</h3>
<<<<<<< HEAD
        <SongForm handleAddSong={this.handleAddSong} />
        <h3>Favorite Movies</h3>
        <Movieform handleAddMovie={this.handleAddMovie} />
=======
        <SongForm handleAddSong = {() => this.handleAddSong} />
        <table>
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
        <Movieform handleAddMovie={() => this.handleAddMovie}/>
>>>>>>> 5c8bbed7e5450acaac730d83e14e9be1e79bba49
      </div>
    );
  }
}
