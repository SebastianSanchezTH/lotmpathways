import React from "react";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./styles/App.css";

const quantity = 22;

const iconsOff = Array.from({ length: quantity }, (_, i) =>
  require(`./assets/iconOff/${i}_Off.png`),
);

const iconsColor = Array.from({ length: quantity }, (_, i) =>
  require(`./assets/iconColor/${i}_Color.png`),
);

export default function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [hovered, setHovered] = useState(null);

  const scrollPrev = () => {
  if (emblaApi) emblaApi.scrollPrev();
};

const scrollNext = () => {
  if (emblaApi) emblaApi.scrollNext();
};

  return (
    <div className="background">
      <div className="embla">
        <button className="embla__arrow embla__arrow--prev" onClick={scrollPrev}>&lt;</button>
        <button className="embla__arrow embla__arrow--next" onClick={scrollNext}>&gt;</button>
        <div className="world"></div>

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {iconsOff.map((off, i) => (
              <div className="embla__slide" key={i}>
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
