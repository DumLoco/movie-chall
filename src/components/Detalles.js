import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detalles = ({ match }) => {
  useEffect(() => {
    fetchPeli();
    console.log(match);
  }, []);
  const [peli, setPeli] = useState({});

  const fetchPeli = async () => {
    const fetchPeli = await fetch(
      `https://www.omdbapi.com/?apikey=fec0f00e&i=${match.params.id}&plot=short`
    );
    const peli = await fetchPeli.json();
    setPeli(peli);
  };

  return (
    <div className="card2">
      <div className="card-header2">
        <h3>Detalles</h3>
      </div>

      <div className="card-body2">
        <div className="img-container">
          <img alt="poster" src={peli.Poster}></img>
        </div>
        <blockquote>
          <h1>{peli.Title}</h1>
          <h4>Director: {peli.Director}</h4>
          <h4>Año: {peli.Year}</h4>
          <h4>Cast: {peli.Actors}</h4>
          <p>{peli.Plot}</p>

          <Link className="btn btn-primary" to="/">
            Volver
          </Link>
        </blockquote>
      </div>
    </div>
  );
};

export default Detalles;
