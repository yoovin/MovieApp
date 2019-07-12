import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
        <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
        </div>
        
        );
    }
}

function Movie({title, poster}){
    
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster"/>
    )
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;