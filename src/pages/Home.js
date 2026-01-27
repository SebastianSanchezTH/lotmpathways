import React from "react";
import Carousel from "../components/Carousel";
import "../styles/App.css";

export default function Home() {
  return (
    <div className="background">
      <div className="embla">
        <Carousel />

        <div className="main-title">
          <h1 data-content="Lord of Mysteries">Lord of The Mysteries</h1>
        </div>

        <div className="title">
          <h2 data-content="The Blasphemy Project">The Blasphemy Project</h2>
        </div>
      </div>
    </div>
  );
}
