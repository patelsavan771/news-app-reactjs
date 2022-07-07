import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News
          title="News- Top headlines"
          country="us"
          apiKey="e46da36b3e7a41978250d7fe6b5b6740"
          category="business"
          pageSize={5}
        />
      </>
    );
  }
}
