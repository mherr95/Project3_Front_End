import React, { Component } from 'react'

const moviesURL = 'http://localhost:3003/movies'

export default class Movieform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            number: 0,
            director: '',
            category: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(moviesURL, {
          method: 'POST',
          body: JSON.stringify({
              title: this.state.title,
              year: this.state.year,
              director: this.state.director,
              category: this.state.category
            }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(resJson => {
            this.props.handleAddMovie(resJson)
            this.setState({
              title: '',
              year: 0,
              director: '',
              category: ''
            })
          }).catch(error => console.log({'Error': error}))
    }


    render() {
        return (
            <div>
            <form className="movie form">
                <label htmlFor="title"></label>
                <input type="text" id="title" name="title"></input>
                <label htmlFor="year"></label>
                <input type="number" id="year" name="year"></input>
                <label htmlFor="director"></label>
                <input type="text" id="director" name="director"></input>
                <label htmlFor="category"></label>
                <input type="text" id="category" name="category"></input>
                <input type="submit" value="Add Movie"></input>
            </form>
            </div>
        )
    }
}
