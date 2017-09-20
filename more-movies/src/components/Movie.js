import React from 'react';

const Movie = (props) => {
  if(props.movie.title){
    return (
    <div className="movie-ind">
      <h3>{props.movie.title}</h3>
      <img src={props.movie.poster} />
      <p style={{color: "gray"}}>{props.movie.rating} - {props.movie.runtime} </p>
      <button 
      onClick={
        props.deleteMovie ? (e) => props.deleteMovie(props.movie.id, e) : (e) => props.saveMovie(e)}
      >
        {props.movie.id ? "Remove This Movie" : "Save This Movie"}
      </button>
    </div>
    );
  } else {
    return (<div className="movie-ind"></div>)
  }
}

export default Movie;