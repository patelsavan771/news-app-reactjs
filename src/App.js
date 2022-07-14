import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 5;

  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />

          <Navbar />

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" country="in" apiKey={this.apiKey} category="general" pageSize={this.pageSize} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="in" apiKey={this.apiKey} category="business" pageSize={this.pageSize} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="in" apiKey={this.apiKey} category="entertainment" pageSize={this.pageSize} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="in" apiKey={this.apiKey} category="health" pageSize={this.pageSize} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country="in" apiKey={this.apiKey} category="science" pageSize={this.pageSize} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="in" apiKey={this.apiKey} category="sports" pageSize={this.pageSize} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="in" apiKey={this.apiKey} category="technology" pageSize={this.pageSize} />} />

          </Routes>
        </Router>
      </>
    );
  }
}



