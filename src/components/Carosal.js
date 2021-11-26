import React, { useState } from "react";
import "./Carosal.css";
import left_arrow from "./../images-logos/angle-double-left-solid.svg";
import right_arrow from "./../images-logos/angle-double-right-solid.svg";
import POSTERS from "../images-logos/fetch-image";

function Carosal() {
  const [currentPosterIndex, setPosterIndex] = useState(1);

  const previousPosterHandler = function (e) {
    if (currentPosterIndex !== 1) {
      setPosterIndex(currentPosterIndex - 1);
    } else {
      setPosterIndex(Object.keys(POSTERS).length);
    }
  };

  const nextPosterHandler = function (e) {
    if (currentPosterIndex !== Object.keys(POSTERS).length) {
      setPosterIndex(currentPosterIndex + 1);
    } else {
      setPosterIndex(1);
    }
  };

  return (
    <>
        <div className="carosal__div">
          <div className="previous__arrow">
            <img src={left_arrow} alt="#" onClick={previousPosterHandler}></img>
          </div>
          <div className="movie__poster">
            <img
              src={POSTERS[currentPosterIndex]}
              alt={"#"}
              className="current__movie__poster"
            ></img>
          </div>
          <div className="next__arrow">
            <img src={right_arrow} alt="#" onClick={nextPosterHandler}></img>
          </div>
        </div>
    </>
  );
}

export default Carosal;
