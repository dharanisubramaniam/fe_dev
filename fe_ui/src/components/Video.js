import "./Video.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import video from "../video/fe_example.mp4";

function Video() {
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
    <div className="video">
      <h3></h3>
      <p></p>
      <div className="video__sidebar">
        <p>4hr 30m course</p>
      </div>
      <div className="video__container">
        <video
          width="1000"
          height="600"
          id="my-player"
          class="video-js"
          controls
          preload="auto"
          data-setup="{}"
        >
          <source src={video} type="video/mp4" />
          <source src="./video/movie.ogg" type="video/ogg" />
        </video>
      </div>
    </div>
  );
}

export default Video;
