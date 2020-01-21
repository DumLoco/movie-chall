import React from "react";
import FetchMain from "./components/FetchMain";
import "./App.css";
import Navbar from "./components/navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchElement = React.createRef();
  }
  state = {
    inputValue: ""
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      let titulo = this.state.inputValue;
      this.fetchElement.current.buscarPelicula(titulo);
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="separador"></div>
        <FetchMain
          peli={this.state.inputValue}
          press={event => this.handleKeyPress(event)}
          ref={this.fetchElement}
        />
      </div>
    );
  }
}

export default App;
