import React, { Component } from 'react'

const songsURL = 'http://localhost:3003/songs'

class SongForm extends Component {
    constructor(pros){
        super(pros)

        this.state = {
            artists: '',
            songs: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        this.setState({[event.currentTarget.id] : event.currentTarget.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(songsURL , {
            method: 'POST',
            body: JSON.stringify({
                artists: this.state.artists,
                songs: this.state.songs
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => {return res.json()})
        .then(data => {
            this.props.handleAddSong(data)
            this.setState({
                artists: '',
                songs: ''
            })
        })
        .catch(error => console.log({'Error': error}))
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="artists"></label>
                    <input 
                        type="text"
                        id="artists"
                        onChange = {this.handleChange}
                        value = {this.state.artist}
                        placeholder = 'Add Artist'
                    />
                    <label htmlFor="songs"></label>
                    <input 
                        type="text"
                        id="songs" 
                        onChange = {this.handleChange}
                        value = {this.state.song}
                        placeholder = 'Add Song'
                    />
                    <input type="submit" value="Add Song"/>
                </form>
            </div>
         );
    }
}
 
export default SongForm;