import React, { useState, useEffect } from "react";
import "./Carosal.css";
import left_arrow from "./../images-logos/angle-double-left-solid.svg";
import right_arrow from "./../images-logos/angle-double-right-solid.svg";
import axios from "../axios";

function Carosal(props) {
  const { title, fetchUrl, modalShowNoShow } = props;

  const [movies, setMovies] = useState([]);
  const [currentPosterIndex, setPosterIndex] = useState(0);

  const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchData = async function () {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const previousPosterHandler = function (e) {
      if (currentPosterIndex !==0){
          setPosterIndex(currentPosterIndex - 1);
      }else{
          setPosterIndex(movies.length - 1);
      }
  };

  const nextPosterHandler = function (e) {
      if (currentPosterIndex !==movies.length - 1){
          setPosterIndex(currentPosterIndex + 1);
      }else{
          setPosterIndex(0);
      }
  };

  console.log(currentPosterIndex);
  return (
    <>
      <h1>{title}</h1>
      <div className="carosal__div">
        <div className="previous__arrow">
          <img src={left_arrow} alt="#" onClick={previousPosterHandler}></img>
        </div>
        <div className="movie__poster">
          {movies.length !== 0 ? (
            <img
              src={`${POSTER_BASE_URL}${movies[currentPosterIndex].poster_path}`}
              alt={"#"}
              className="current__movie__poster"
            ></img>
          ) : (
            <></>
          )}
        </div>
        <div className="next__arrow">
          <img src={right_arrow} alt="#" onClick={nextPosterHandler}></img>
        </div>
      </div>
    </>
  );
}

export default Carosal;
