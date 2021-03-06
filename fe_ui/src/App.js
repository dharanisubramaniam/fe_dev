import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainBody from "./components/MainBody";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CourseHome from "./components/CourseHome";
import axios from "axios";
import Register from "./components/Register";
import Login from "./components/Login";
import Video from "./components/Video";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/course">
            <Header />
            <CourseHome />
          </Route>
          <Route path="/video">
            <Header />
            <Video />
          </Route>
          <Route path="/">
            <Header />
            <div className="body">
              <SideBar />
              <MainBody />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
