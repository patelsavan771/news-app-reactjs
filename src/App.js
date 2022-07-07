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
  static apiKeyVar = "";
  render() {
    return (
      <>
        <Router>

          <Navbar />


          <Routes>
            <Route exact path="/" element={<News key="general" title="News- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="general" pageSize={5} />} />
            <Route exact path="/business" element={<News key="business" title="Business- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="business" pageSize={5} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" title="Entertainment- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="entertainment" pageSize={5} />} />
            <Route exact path="/general" element={<News key="general" title="General- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="general" pageSize={5} />} />
            <Route exact path="/health" element={<News key="health" title="Health- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="health" pageSize={5} />} />
            <Route exact path="/science" element={<News key="science" title="Science- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="science" pageSize={5} />} />
            <Route exact path="/sports" element={<News key="sports" title="Sports- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="sports" pageSize={5} />} />
            <Route exact path="/technology" element={<News key="technology" title="Technology- Top headlines" country="in" apiKey="e9e5c35d0a554c7d8723d0315761f14f" category="technology" pageSize={5} />} />

          </Routes>
        </Router>
      </>
    );
  }
}



