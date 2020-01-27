import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  state = {};
  render() {
    return (
      <div className="about">
        <h2>
          Buscador de películas que utiliza el web service de OMDb. Realizado en
          React.js.
        </h2>
        <Link className="btn btn-primary" to="/">
          Volver
        </Link>
      </div>
    );
  }
}

export default About;
