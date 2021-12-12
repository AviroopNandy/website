import React, { useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";

import "./Demo.style.css";

const Demo = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="demo">
      <div className="container">
        <div className="demo-container">
          <h2 className="heading">
            Here you will find demos of NeuroStimDuino in action
          </h2>
          <ul>
            <li>
              <h3>Neuromuscular Stimulation using NeuroStimDuino</h3>
            </li>
          </ul>
          <div className="demo-video">
            <Vimeo
              className="video"
              video="https://player.vimeo.com/video/654477763?h=aba810534f"
              autoplay={false}
              responsive
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
