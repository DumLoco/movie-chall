import React, { Component } from "react";

class SearchMovie extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm"></div>

          <div className="col-sm">
            <input
              className="form-control"
              placeholder={this.props.placeHol}
              onChange={this.props.onCambio}
              onKeyPress={this.props.onKey}
            ></input>
          </div>

          <div className="col-sm">
            <button
              className="btn btn-primary"
              onClick={this.props.onClickButton}
            >
              Buscar Pelicula
            </button>
          </div>
          <div className="col-sm"></div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

export default SearchMovie;
