import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Futer from "./components/Futer";
import Detalles from "./components/Detalles";
import axios from "axios";
import SearchBox from "./components/searchBox";

class App extends React.Component {
  state = {
    ListaTitulos: [
      {
        Title: "Aliens",
        Year: "1986",
        imdbID: "tt0090605",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        Title: "Cowboys & Aliens",
        Year: "2011",
        imdbID: "tt0409847",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM1MzkyNzQ3OV5BMl5BanBnXkFtZTcwMDk1NTg2NQ@@._V1_SX300.jpg"
      },
      {
        Title: "Monsters vs. Aliens",
        Year: "2009",
        imdbID: "tt0892782",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_SX300.jpg"
      }
    ],
    busquedaPeli: ""
  };

  search = event => {
    event.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com/?apikey=fec0f00e&s=${this.state.busquedaPeli}`
      )
      .then(res => res.data)
      .then(res => {
        if (res.Search === undefined) {
          this.setState({ ListaTitulos: [] });
          return;
        }

        const ListaTitulos = res.Search.map(movie => movie);
        this.setState({
          ListaTitulos
        });
        console.log(this.state.ListaTitulos);
      });
  };

  handleForm = event => {
    this.setState({
      busquedaPeli: event.target.value
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="separador"></div>

          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <SearchBox
                  handleform={this.handleForm}
                  search={this.search}
                  busqueda={this.state.ListaTitulos}
                />
              )}
            />
            <Route path="/about" exact component={About} />
            <Route path="/:id" component={Detalles} />
          </Switch>

          <Futer />
        </div>
      </Router>
    );
  }
}

export default App;
