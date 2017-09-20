import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import Movie from './Movie';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:8080/all")
      .then(response => {
        if(response.data.status === "success"){
          this.setState({movies: response.data.results})
        } else {
          alert("Error With Database");
        }
      })
  }

  deleteMovie(movieID, e){
    e.preventDefault();
    axios.delete(`http://localhost:8080/${movieID}`)
      .then(response => {
        if(response.data.status === "success"){
          const movieToRemove = this.state.movies.find(movie => movie.id === movieID);
          this.setState((prevState) => {
            const movies = prevState.movies;
            movies.splice(movies.indexOf(movieID), 1);
            return {movies: movies}
          })
        }
      })
      .catch(response => alert('Local Error Deleting'));
  }

  renderMovies(){
    return this.state.movies.map((movie, index) => {
      return <Movie movie={movie} key={index} deleteMovie={this.deleteMovie.bind(this)} />
    });
  }

  render() {
    return (
      <div className="container">
        <h2> Currently Showing Movies </h2>
        <div className="movies">
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

export default App;
