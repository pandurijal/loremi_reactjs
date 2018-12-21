import React, { Component } from "react";
import Filter from "./components/Filter";
import TextBox from "./components/TextBox";
import "./App.css";

class App extends Component {
  state = {
    content: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const paras = e.target.paras.value;
    const startWith = e.target.startWith.checked;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://baseballipsum.apphb.com/api/?paras=${paras}&startwithlorem=${startWith}`
    );
    const res = await api_call.json();
    this.setState({ content: res });
    console.log(startWith);
    //console.log(this.state.content[0]);
  };

  render() {
    return (
      <div className="App">
        <h1>Loremi Apps</h1>
        <Filter onSubmit={this.handleSubmit} />
        <TextBox content={this.state.content} />
      </div>
    );
  }
}

export default App;
