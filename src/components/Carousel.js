import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/App.css";

const quantity = 22;

const iconsOff = Array.from({ length: quantity }, (_, i) =>
  require(`../assets/iconOff/${i}_Off.png`),
);

const iconsColor = Array.from({ length: quantity }, (_, i) =>
  require(`../assets/iconColor/${i}_Color.png`),
);

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const handleClick = (i) => {
    navigate(`/detail/${i}`, {
      state: { fromIndex: i },
    });
  };

  useEffect(() => {
    if (location.state?.restoreIndex !== undefined && emblaApi) {
      emblaApi.scrollTo(location.state.restoreIndex);
    }
  }, [emblaApi, location.state]);

  return (
    <>
      <button className="embla__arrow embla__arrow--prev" onClick={scrollPrev}>
        &lt;
      </button>
      <button className="embla__arrow embla__arrow--next" onClick={scrollNext}>
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
    </>
  );
}
