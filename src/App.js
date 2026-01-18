import { useState } from "react";
import "./styles/App.css";

const quantity = 22;

const iconsOff = Array.from({ length: quantity }, (_, i) =>
  require(`./assets/iconOff/${i}_Off.png`),
);

const iconsColor = Array.from({ length: quantity }, (_, i) =>
  require(`./assets/iconColor/${i}_Color.png`),
);

function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <header className="App-header">
        <div className="banner">
          <div className="slider" style={{ "--quantity": quantity }}>
            {iconsOff.map((off, i) => (
              <div
                className="item"
                key={i}
                style={{ "--i": i }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={hovered === i ? iconsColor[i] : off}
                  alt={`icon${i}`}
                  draggable="false"
                />
              </div>
            ))}
          </div>
          <div className="world"></div>
        </div>

        <div className="content">
          <h1>Lord of Mysteries</h1>
          <div className="title">
            <h2>The Blasphemy Project</h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
