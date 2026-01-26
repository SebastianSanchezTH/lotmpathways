import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import Detail from "./Detail";
import "./styles/App.css";

const quantity = 22;
const iconsOff = Array.from({ length: quantity }, (_, i) =>
  require(`./assets/iconOff/${i}_Off.png`),
);
const iconsColor = Array.from({ length: quantity }, (_, i) =>
  require(`./assets/iconColor/${i}_Color.png`),
);

// Página de detalle
function DetailPage() {
  const { id } = useParams(); // obtiene el id desde la URL
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Detalles del icono {id}</h1>
      <p>Aquí puedes mostrar información específica de este icono.</p>
      <img
        src={require(`./assets/iconColor/${id}_Color.png`)}
        alt={`icon${id}`}
        style={{ width: "200px" }}
      />
    </div>
  );
}

// Carousel como componente
function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const handleClick = (i) => navigate(`/detail/${i}`);

  return (
    <div className="background">
      <div className="embla">
        <button
          className="embla__arrow embla__arrow--prev"
          onClick={scrollPrev}
        >
          &lt;
        </button>
        <button
          className="embla__arrow embla__arrow--next"
          onClick={scrollNext}
        >
          &gt;
        </button>
        <div className="world"></div>

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {iconsOff.map((off, i) => (
              <div className="embla__slide" key={i}>
                <div
                  className="item"
                  style={{ "--i": i }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleClick(i)}
                >
                  <img
                    src={hovered === i ? iconsColor[i] : off}
                    alt={`icon${i}`}
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

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

// App principal
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
