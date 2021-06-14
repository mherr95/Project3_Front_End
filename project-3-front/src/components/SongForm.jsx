import React, { Component } from 'react'

const songsURL = 'http://localhost:3003/songs'

class SongForm extends Component {
    constructor(pros){
        super(pros)

        this.state = {
            artist: '',
            song: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({[event.currentTarget.id] : event.currentTarget.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(songsURL , {
            method: 'POST',
            body: JSON.stringify({
                artist: this.state.artist,
                song: this.state.song
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => {return res.json()})
        .then(data => {
            this.props.handleAddSong(data)
            this.setState({
                artist: '',
                song: ''
            })
        })
        .catch(error => console.log({'Error': error}))
    }

    render() { 
        return ( 
            <div>
                <form>
                    <label htmlFor="artist"></label>
                    <input 
                        type="text"
                        id="artist"
                        onChange = {this.handleChange}
                        value = {this.state.artist}
                        placeholder = 'Add Artist'
                    />
                    <label htmlFor="song"></label>
                    <input 
                        type="text"
                        id="song" 
                        onChange = {this.handleChange}
                        value = {this.state.song}
                        placeholder = 'Add Song'
                    />
                    <input type="submit Song"/>
                </form>
            </div>
         );
    }
}
 
export default SongForm;