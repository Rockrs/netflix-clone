import "./Modal.css";

function MODAL(props) {
  
  const {movieObject} = props;
  
  const movieRating = movieObject.vote_average;
  const movieOverview =movieObject.overview;
  const movieLang =movieObject.original_language;
  const adult =movieObject.adult
    ?movieObject.adult
    : "false";
  const popularity =movieObject.popularity;

  return (
    <div className="modal__main">
      <p className="movie__overview">{movieOverview}</p>
      <div className="movie__rating movie__info">
        Rating : <span>{movieRating}</span>
      </div>
      <div className="movie__lang movie__info">
        Lang : <span>{movieLang}</span>
      </div>
      <div className="movie__content movie__info">
        Content : <span>{adult}</span>
      </div>
      <div className="movie__popularity movie__info">
        Popularity : <span>{popularity}</span>
      </div>
      <div className ="movie__backbtn">
        <button type="button" className = "back__btn"></button>
      </div>
    </div>
  );
}

export default MODAL;
