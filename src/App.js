import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = "e46da36b3e7a41978250d7fe6b5b6740";
  pageSize = 5;
  render() {
    return (
      <>
        <Router>

          <Navbar />

          <Routes>
            <Route exact path="/" element={<News key="general" country="in" apiKey={this.apiKey} category="general" pageSize={this.pageSize} />} />
            <Route exact path="/business" element={<News key="business" country="in" apiKey={this.apiKey} category="business" pageSize={this.pageSize} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" apiKey={this.apiKey} category="entertainment" pageSize={this.pageSize} />} />
            <Route exact path="/health" element={<News key="health" country="in" apiKey={this.apiKey} category="health" pageSize={this.pageSize} />} />
            <Route exact path="/science" element={<News key="science" country="in" apiKey={this.apiKey} category="science" pageSize={this.pageSize} />} />
            <Route exact path="/sports" element={<News key="sports" country="in" apiKey={this.apiKey} category="sports" pageSize={this.pageSize} />} />
            <Route exact path="/technology" element={<News key="technology" country="in" apiKey={this.apiKey} category="technology" pageSize={this.pageSize} />} />

          </Routes>
        </Router>
      </>
    );
  }
}



