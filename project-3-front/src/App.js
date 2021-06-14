import React, { Component } from 'react'
import Movieform from './components/Movieform'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>My favorite things</h1>
        <Movieform />
        <h3>Favorite Songs</h3>
        <h3>Favorite Movies</h3>
      </div>
    )
  }
}

