import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainBody.css";
import Row from "./Row";

function MainBody() {
  const [path, setPath] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/video");
      setPath(response.data.results[0]);
      console.log("path", path);
    }
    fetchData();
  }, []);

  return (
    <div className="mainbody">
      <div className="mainbody__categoryContainer">
        <h3>{path.category} Courses</h3>
        <a>View All</a>
      </div>
      <div className="mainbody__rowsContainer">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
      <div className="mainbody__categoryContainer">
        <h3>Maya Courses Courses</h3>
        <a>View All</a>
      </div>
      <div className="mainbody__rowsContainer">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
      <div className="mainbody__categoryContainer">
        <h3>Cinema4D Courses</h3>
        <a>View All</a>
      </div>
      <div className="mainbody__rowsContainer">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

export default MainBody;
