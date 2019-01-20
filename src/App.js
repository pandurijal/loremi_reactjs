import React, { Component } from "react";
import Filter from "./components/Filter";
import TextBox from "./components/TextBox";
import "./App.css";

class App extends Component {
  state = {
    paras: 1,
    lorem: true,
    content: []
  };

  render() {
    return (
      <div className="App">
        <h1>Loremi Apps</h1>
        <Filter
          onSubmit={this.handleSubmit}
          state={this.state}
          changeParas={this.changeParas}
          changeLorem={this.changeLorem}
          onDec={this.handleDec}
          onInc={this.handleInc}
        />
        <TextBox content={this.state.content} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.paras !== this.state.paras ||
      prevState.lorem !== this.state.lorem
    ) {
      this.fetchData();
    }
    console.log(this.state);
  }

  fetchData = async e => {
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://baseballipsum.apphb.com/api/?paras=${
        this.state.paras
      }&startwithlorem=${this.state.lorem}`
    );
    const res = await api_call.json();
    this.setState({ content: res });
  };

  changeParas = e => {
    let paras = e.target.value;
    this.setState({ paras });
  };

  changeLorem = e => {
    let lorem = !this.state.lorem;
    this.setState({ lorem });
  };

  handleInc = () => {
    let paras = this.state.paras;
    this.setState({ paras: paras + 1 });
  };

  handleDec = () => {
    let paras = this.state.paras;
    this.setState({ paras: paras - 1 });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // const paras = e.target.paras.value;
    // const startWith = e.target.startWith.checked;

    //console.log(this.state.content[0]);
  };
}

export default App;
