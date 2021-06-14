import React, { Component } from "react";
import Movieform from "./components/Movieform";
import SongForm from "./components/SongForm";

const songsURL = "http://localhost:3003/songs";
const moviesURL = "http://localhost:3003/movies";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      movies: [],
    };
  }

  //////////////
  /// Movies
  //////////////
  getMovie() {
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
  }

  /////////////////
  // SONGS CODE
  ////////////////

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

  render() {
    return (
      <div>
        <h1>My favorite things</h1>
        <h3>Favorite Songs</h3>
        <SongForm handleAddSong={this.handleAddSong} />
        <h3>Favorite Movies</h3>
        <Movieform handleAddMovie={this.handleAddMovie} />
      </div>
    );
  }
}
