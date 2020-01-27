import React from "react";
import ListaTitulos from "./ListaTitulos";

const SearchBox = props => {
  return (
    <div>
      <div className="topnav">
        <div className="search-container">
          <form onSubmit={props.search}>
            <input
              type="text"
              placeholder="Ingresar película.."
              name="search"
              onChange={props.handleform}
            />
            <button className="btn-searchbox" type="submit">
              Buscar película
            </button>
          </form>
        </div>
      </div>{" "}
      <br />
      <ListaTitulos ListaTitulos={props.busqueda} />
    </div>
  );
};

export default SearchBox;
