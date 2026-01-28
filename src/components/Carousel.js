import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowNavigation from "./ArrowNavigation";
import "../styles/App.css";

{
  /* Cantidad de logos */
}
const quantity = 22;

{
  /* Arreglo de logos OffColor */
}
const iconsOff = Array.from({ length: quantity }, (_, i) =>
  require(`../assets/iconOff/${i}_Off.png`),
);
{
  /* Arreglo de logos Color */
}
const iconsColor = Array.from({ length: quantity }, (_, i) =>
  require(`../assets/iconColor/${i}_Color.png`),
);

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  {
    /* Constantes de navegacion/movimieento */
  }
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const handleClick = (i) => {
    navigate(`/detail/${i}`, {
      state: { fromIndex: i },
    });
  };

  {
    /* Restaurar index */
  }
  useEffect(() => {
    if (location.state?.restoreIndex !== undefined && emblaApi) {
      emblaApi.scrollTo(location.state.restoreIndex);
    }
  }, [emblaApi, location.state]);

  return (
    <>
      {/* Botnoes  de carousel embla */}
      <button className="embla__arrow embla__arrow--prev" onClick={scrollPrev}>
        {"<"}
      </button>
      <button className="embla__arrow embla__arrow--next" onClick={scrollNext}>
        {">"}
      </button>

      {/* Imagen de fondeo central */}
      <div className="world"></div>

      <div className="embla__viewport" ref={emblaRef}>
        {/* Contenedor de logos */}
        <div className="embla__container">
          {/* Mapeo de logos para carousel */}
          {iconsOff.map((off, i) => (
            <div className="embla__slide" key={i}>
              <div
                className="item"
                style={{ "--i": i }}
                onMouseEnter={() => setHovered(i)} // Hover cambio de color de logos (Off/Color)
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(i)} // Navegacion a Detail
              >
                <img
                  src={hovered === i ? iconsColor[i] : off} // Hover cambio de color de logos (Off/Color)
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
