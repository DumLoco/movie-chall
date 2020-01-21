import React from "react";
import MovieData from "../components/MovieData";
import SearchMovie from "../components/SearchMovie";

class FetchMain extends React.Component {
  state = {
    moviePoster: null,
    movieTitle: null,
    movieYear: null,
    url: `http://www.omdbapi.com/?apikey=fec0f00e&`,
    busquedaPeli: this.props.peli
  };

  fetchData = movie => {
    fetch(`${this.state.url}t=${this.state.busquedaPeli}`)
      .then(response => response.json())
      .then(resp =>
        this.setState({
          moviePoster: resp.Poster,
          movieTitle: resp.Title,
          movieYear: resp.Year,
          movieDirector: resp.Director,
          movieRuntime: resp.Runtime,
          movieActors: resp.Actors
        })
      );
  };

  buscarPelicula = pelicula => {
    this.setState({
      busquedaPeli: pelicula
    });
    this.fetchData(pelicula);
  };

  handleInputChange = event => {
    this.setState({ busquedaPeli: event.target.value });
  };

  render() {
    if (this.state.moviePoster === null) {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img alt="" src={this.state.moviePoster}></img>
              </div>
              <div className="col-sm-4">
                <h4 className="descripcion">
                  ingresa el título que quieras en el campo de busqueda para ver
                  info sobre la película!
                </h4>
              </div>
            </div>
          </div>

          <div className="futer">
            <SearchMovie
              onCambio={event => this.handleInputChange(event)}
              onKey={this.props.press}
              onClickButton={() => this.buscarPelicula(this.props.peli)}
            />
          </div>
        </div>
      );
    } else if (this.state.moviePoster === undefined) {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img alt="" src={this.state.moviePoster}></img>
              </div>
              <div className="col-sm-4">
                <h4 className="descripcion">
                  No se encuentra la película. Por favor ingresa el titulo
                  correcto.
                </h4>
              </div>
            </div>
          </div>

          <div className="futer">
            <SearchMovie
              onCambio={event => this.handleInputChange(event)}
              onKey={this.props.press}
              onClickButton={() => this.buscarPelicula(this.props.peli)}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img alt="" src={this.state.moviePoster}></img>
            </div>
            <div className="col-sm-4">
              <MovieData
                className="moviedata"
                movieTitle={this.state.movieTitle}
                movieYear={this.state.movieYear}
                movieDirector={this.state.movieDirector}
                movieActors={this.state.movieActors}
                movieRuntime={this.state.movieRuntime}
              />
            </div>
          </div>
        </div>

        <div className="futer">
          <SearchMovie
            onCambio={event => this.handleInputChange(event)}
            onKey={this.props.press}
            onClickButton={() => this.buscarPelicula(this.props.peli)}
          />
        </div>
      </div>
    );
  }
}

export default FetchMain;
