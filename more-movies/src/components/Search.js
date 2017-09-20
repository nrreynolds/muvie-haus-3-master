import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { Redirect } from 'react-router';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      movie: {},
      searchTerms: "",
    }
  }

  handleSearchTerms(e){
    this.setState({searchTerms: e.target.value});
  }

  searchOMDB(e){
    e.preventDefault();
    const queryString = this.state.searchTerms.split(" ").join("+");
    // console.log(queryString);
    axios.get(`http://www.omdbapi.com/?t=${queryString}`)
      .then(response => {
        if(response.data.Error){
          alert('Movie Not Found!');
        } else {
          this.setState({movie: this.parseMovieData(response.data)});
        }
      })
  }

  parseMovieData(rawData){
    const movie = {};

    movie.title = rawData.Title;
    movie.rating = rawData.Rated;
    movie.poster = rawData.Poster;
    movie.runtime = rawData.Runtime;

    return movie;
  }

  showMovie(){
    if(this.state.movie.title){
      return (
        <Movie movie={this.state.movie} saveMovie={this.saveMovie.bind(this)} />
      )
    }
  }

  saveMovie(){
    axios.post("http://localhost:8080/", this.state.movie)
      .then(response => this.props.history.push("/"))
      .catch(response => alert("Problem Occured While Saving Movie"));
  }

  render(){
    return (
      <div className="search">
        <form onSubmit={(e) => this.searchOMDB(e)}>
          <input type="text" value={this.state.searchTerms} onChange={(e) => this.handleSearchTerms(e)} />
          <input type="submit" value="search" />
        </form>
        <div className="search-result">
          {this.showMovie()}
        </div>
      </div>
    );
  }
}

export default Search;