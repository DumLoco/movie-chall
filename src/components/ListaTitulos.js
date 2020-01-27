import React, { Component } from "react";
import Card from "./Card";

class ListaTitulos extends React.Component {
  render() {
    const { ListaTitulos } = this.props;

    return (
      <div className="nada">
        <div className="container">
          <div className="row">
            {ListaTitulos.length > 0 ? (
              ListaTitulos.map(movie => (
                <Card
                  movieList={movie}
                  movieID={movie.imdbID}
                  key={movie.imdbID}
                />
              ))
            ) : (
              <p>
                No se encontró la película. Por favor ingresá un título
                existente.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaTitulos;
