import React from "react";

const MovieData = props => {
  return (
    <div className="div-inline">
      <h1>{props.movieTitle}</h1>
      <h5>Año: {props.movieYear}</h5>
      <h5>Director: {props.movieDirector}</h5>
      <h5>Cast: {props.movieActors}</h5>
      <h5>Duración: {props.movieRuntime}</h5>
    </div>
  );
};

export default MovieData;
