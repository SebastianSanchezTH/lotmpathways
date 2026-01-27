import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Data } from "./components/Data";
import BackButton from "./components/BackButton";

import "./styles/Detail.css"; // Tu CSS sigue igual

export default function Detail() {
  const { id } = useParams();
  const data = Data[id]; // Obtener información de carousel e imagenes
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const navigate = useNavigate();
  const [hoveredNeighbor, setHoveredNeighbor] = useState(null);

  // Manejar la tecla Escape para volver
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // Manejar en caso de que no encuentre data
  if (!data) return <p>Información no encontrada</p>;

  return (
    <div className="detail-background">
      {/* Boton de volver */}
      <BackButton to="/" label="<" />
      {/* Overlay para combiod de color de fondo */}
      <div
        className="detail-overlay"
        style={{ backgroundColor: data.overlayColor }}
      />
      <div className="detail-logo">
        {/* Logo de la secuencia */}
        <img src={data.logoColor} alt="Logo" />
      </div>
      <div className="detail-title">
        {/* Titulo de la secuencia 0*/}
        <h1>{data.title}</h1>
      </div>
      <div className="detail-content">
        <div className="detail-card-image">
          {/* Carta a la izquierda */}
          <div className="detail-card">
            <img src={data.card} alt="Carta" />
            {/* Titulo de Secuencias intercambiables*/}
            <h2>Neighboring Pathways</h2>
            {Array.isArray(data.neighbors) && data.neighbors.length > 0 && (
              <div className="detail-neighbors">
                {/* Detalles de Secuencias intercambiables */}
                {data.neighbors.map((neighbor) => (
                  <img
                    key={neighbor.id}
                    src={
                      hoveredNeighbor === neighbor.id
                        ? neighbor.iconColor
                        : neighbor.iconOff
                    }
                    alt={`Neighbor ${neighbor.id}`}
                    className="neighbor-icon"
                    //Hover de cambio de color
                    onMouseEnter={() => setHoveredNeighbor(neighbor.id)}
                    onMouseLeave={() => setHoveredNeighbor(null)}
                    onClick={() => navigate(`/detail/${neighbor.id}`)} //Ir a los detalles de la secuencia
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="detail-text">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {data.sequences.map((seq, idx) => (
                <div className="embla__slides" key={idx}>
                  {/* Titulo de la secuencia*/}
                  <h2>{seq.seqTitle}</h2>
                  {/* Descripcion de la secuencia */}
                  <div className="des">{seq.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
