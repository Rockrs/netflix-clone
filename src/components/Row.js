import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

function ROW(props) {
  const [movies, setMovies] = useState([]);
  const { title, fetchUrl, modalShowNoShow} = props;
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

  // event-listener responsible for handling poster click
  const posterClickHandler = function (e) {
    const movieIdElement = e.target.parentElement.lastChild;
    const movieId = movieIdElement.textContent;

    //disable scrolling
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = function(){
      window.scrollTo(0, scrollTop);
    }

    // this represents the movie object which is clicked
    const movieObject = movies.filter((movie) => {
      return movie.id.toString() === movieId;
    });

    // make modal and background visible
    modalShowNoShow({
      makeVisible : true,
      movieObject : movieObject['0'],
    })
  };

  // A snippet of code which runs on specific condition/variable
  // this snippet executes a async task which fetches the data from API
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // Ex: "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US"

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);


  return (
    <div className="row">
      <div><h1>{title}</h1></div>
      <div className="row__posters">
        {/* adding movies of a particular genere/category in a row */}
        {/* this snippet maps every movie Object to a DOM location*/}
        {movies.map((movie) => {
          return (
            <div className="row__div" key={movie.id}>
              {/* tag for movie poster */}
              <img
                className="row__poster"
                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                alt={movie.name}
                onClick={posterClickHandler}
              ></img>
              {/* tag for movie-id which will be hidden from DOM, but useful to fetch movie info onClick */}
              <div className="row__movie__id">{movie.id}</div>
              {/* {movies ? <MODAL></MODAL> : <></>} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ROW;