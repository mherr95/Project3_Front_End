import React, { Component } from 'react'

export default class Movieform extends Component {
    render() {
        return (
            <div>
            <form className="movie form">
            <label htmlFor="title"></label>
                <input type="text"></input>
                <label htmlFor="lyrics"></label>
                <input type="text"></input>
                <input type="submit" value="Add Movie"></input>
            </form>
            </div>
        )
    }
}
